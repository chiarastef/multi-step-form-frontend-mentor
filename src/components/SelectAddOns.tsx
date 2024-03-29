import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import { AddOns } from "../data/plansData";

const Title = styled.h2`
  font-size: var(--title-font-size-mobile);
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: var(--text-font-size-mobile);
  color: var(--text-color);
  margin-bottom: var(--margin-mobile);

  @media screen and (min-width: 768px) {
    margin-bottom: var(--margin-tablet);
  }
`;

const AddOnsForm = styled.form`
  .selected {
    background-color: #fafbff;
    border-color: #473dff;
  }
`;

const Option = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  border: var(--border);
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: border-color 150ms ease-in;

  &:hover {
    border-color: var(--accent-color);
  }
`;

const OptionInfo = styled.span`
  display: flex;
`;

const OptionText = styled.span`
  font-size: var(--text-font-size-mobile);
  margin-left: 13px;

  span:first-of-type {
    font-weight: 700;
    color: var(--primary-color);
  }

  span:last-of-type {
    font-size: 12px;
    color: var(--text-color);
    margin-top: 4px;
  }
`;

const OptionPrice = styled.span`
  color: #473dff;
  font-size: 12px;
`;

const SelectAddOns = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { planInfo, setPlanInfo } = appContext;

  // Update planInfo state when user selects options
  const selectAddOn = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setPlanInfo({ ...planInfo, addOns: [...planInfo.addOns, e.target.id] });
    } else {
      const addOnsArr = [...planInfo.addOns];
      const deselectedItemIndex = addOnsArr.indexOf(e.target.id);
      addOnsArr.splice(deselectedItemIndex, 1);
      setPlanInfo({ ...planInfo, addOns: addOnsArr });
    }
  };

  // Check if option is selected to add 'selected' class
  const isSelected = (addOnForm: string): boolean => {
    let isSelected = false;

    planInfo.addOns.forEach((addOn) => {
      if (!isSelected && addOn === addOnForm) {
        isSelected = true;
      }
    });

    return isSelected;
  };

  return (
    <>
      <Title>Pick add-ons</Title>
      <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
      <AddOnsForm>
        {AddOns.map((addOn, index) => {
          return (
            <Option
              key={index}
              className={isSelected(addOn.type) ? "selected" : ""}
            >
              <OptionInfo>
                <input
                  type="checkbox"
                  id={addOn.type}
                  checked={isSelected(addOn.type)}
                  onChange={selectAddOn}
                />
                <OptionText>
                  <span>{addOn.type}</span>
                  <br />
                  <span>{addOn.description}</span>
                </OptionText>
              </OptionInfo>
              <OptionPrice>
                +$
                {planInfo.isYearly
                  ? addOn.yearlyPrice + "/yr"
                  : addOn.monthlyPrice + "/mo"}
              </OptionPrice>
            </Option>
          );
        })}
      </AddOnsForm>
    </>
  );
};

export default SelectAddOns;
