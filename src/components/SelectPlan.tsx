import React from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { AppContext } from "../context";

import { Plans } from "../data/plansData";

const Title = styled.h2`
  font-size: var(--title-font-size-mobile);
  color: #02295a;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: var(--text-font-size-mobile);
  color: #9699ab;
  margin-bottom: var(--margin-mobile);

  @media screen and (min-width: 768px) {
    margin-bottom: var(--margin-tablet);
  }
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
  align-items: center;
  width: 100%;
  padding: 8px;
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
    height: 0;
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    /* Add margin to all plan options except last one */
    &:not(&:last-of-type) {
      margin-right: 10px;
    }
  }
`;

const OptionText = styled.div`
  margin-left: 12px;

  div:nth-child(1) {
    font-size: var(--text-font-size-mobile);
    font-weight: 700;
    text-transform: capitalize;
    color: var(--primary-color);
  }

  div:nth-child(2) {
    font-size: 13px;
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
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: #fafbff;
  border-radius: 10px;
  margin-top: var(--margin-mobile);

  span:first-of-type {
    color: var(--primary-color);
  }

  span:last-of-type {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

const SelectPlan = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { planInfo, setPlanInfo } = appContext;

  // Update planInfo state when user selects planInfo
  const selectPlan = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPlanInfo({
      ...planInfo,
      planName: (e.target.parentElement as HTMLLabelElement).id,
    });
  };

  return (
    <>
      <Title>Select Plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <Options>
        {Plans.map((plan, index) => {
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
