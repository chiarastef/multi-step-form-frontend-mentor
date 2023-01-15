import React from "react";
import { AppContext } from "../context";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const Title = styled.h2`
  color: #02295a;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #9699ab;
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;

  .selected {
    background-color: #fafbff;
    border-color: #473dff;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  border: var(--border);
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;

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
  const data = React.useContext(AppContext);
  const [planSelected, setPlanSelected] = React.useState<string>("");

  const plans = [
    {
      image: arcade,
      type: "arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      image: advanced,
      type: "advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      image: pro,
      type: "pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ];

  const selectPlan = (e: React.SyntheticEvent): void => {
    // User can only select one
    // Before selecting another one the user has to deselect the selected one
    if (!planSelected) {
      e.currentTarget.classList.add("selected");
      setPlanSelected(e.currentTarget.id);
    } else if (e.currentTarget.id === planSelected) {
      e.currentTarget.classList.remove("selected");
      setPlanSelected("");
    }
  };

  return (
    <>
      <Title>Select Plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <Options>
        {plans.map((plan, index) => {
          return (
            <Option key={index} id={plan.type} onClick={selectPlan}>
              <img src={plan.image} alt={`${plan.type} plan icon`} />
              <OptionText>
                <div>{plan.type}</div>
                <div>
                  $
                  {data?.isYearly
                    ? plan.yearlyPrice + "/yr"
                    : plan.monthlyPrice + "/mo"}
                </div>
                {data?.isYearly && <div>2 months free</div>}
              </OptionText>
            </Option>
          );
        })}
      </Options>
      <Regularity>
        <span> Monthly</span>
        <Switch
          checked={data?.isYearly}
          onChange={() => data?.setIsYearly(!data?.isYearly)}
          color="default"
        />
        <span>Yearly</span>
      </Regularity>
    </>
  );
};

export default SelectPlan;
