import React from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { AppContext } from "../context";

import { plans } from "../data/plansData";

const Title = styled.h2`
  color: #02295a;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #9699ab;
  margin-bottom: 20px;
`;

const Options = styled.form`
  display: flex;
  flex-direction: column;

  .selected {
    background-color: #fafbff;
    border-color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Option = styled.label`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  border: var(--border);
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: border-color 150ms ease-in;

  &:hover {
    border-color: var(--accent-color);
  }

  input {
    width: 0;
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;

    /* Add margin to all plan options except last one */
    &:not(&:last-of-type) {
      margin-right: 10px;
    }
  }
`;

const OptionText = styled.div`
  margin-left: 12px;

  div:nth-child(1) {
    font-weight: 700;
    text-transform: capitalize;
    color: var(--primary-color);
  }

  div:nth-child(2) {
    font-size: 15px;
    color: var(--text-color);
    margin-top: 4px;
  }

  div:nth-child(3) {
    font-size: 12px;
    letter-spacing: -0.5px;
    color: var(--primary-color);
    margin-top: 6px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

const Regularity = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  background-color: #fafbff;
  border-radius: 10px;
  margin-top: 20px;

  span:first-of-type {
    color: var(--primary-color);
  }

  span:last-of-type {
    color: var(--text-color);
  }
`;

const SelectPlan = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { planInfo, setPlanInfo } = appContext;

  const selectPlan = (e: React.FormEvent<HTMLInputElement>): void => {
    setPlanInfo({
      ...planInfo,
      planName: (e.currentTarget.parentElement as HTMLLabelElement).id,
    });
  };

  return (
    <>
      <Title>Select Plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <Options>
        {plans.map((plan, index) => {
          return (
            <Option
              key={index}
              id={plan.type}
              className={plan.type === planInfo.planName ? "selected" : ""}
            >
              <input
                type="radio"
                name="plans"
                checked={plan.type === planInfo.planName}
                onChange={selectPlan}
              />
              <img src={plan.image} alt={`${plan.type} plan icon`} />
              <OptionText>
                <div>{plan.type}</div>
                <div>
                  $
                  {planInfo.isYearly
                    ? plan.yearlyPrice + "/yr"
                    : plan.monthlyPrice + "/mo"}
                </div>
                {planInfo.isYearly && <div>2 months free</div>}
              </OptionText>
            </Option>
          );
        })}
      </Options>
      <Regularity>
        <span> Monthly</span>
        <Switch
          checked={planInfo.isYearly}
          onChange={() =>
            setPlanInfo({
              ...planInfo,
              isYearly: !planInfo.isYearly,
            })
          }
          color="default"
        />
        <span>Yearly</span>
      </Regularity>
    </>
  );
};

export default SelectPlan;
