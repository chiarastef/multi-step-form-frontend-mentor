import React from "react";
import { AppContext } from "../context";
import styled from "styled-components";

const Title = styled.h2`
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: var(--text-color);
  margin-bottom: 20px;
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
`;

const OptionInfo = styled.span`
  display: flex;
`;

const OptionText = styled.span`
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
  font-size: 13px;
`;

const SelectAddOns = () => {
  const data = React.useContext(AppContext);
  const [addOns, setAddOns] = React.useState([]);

  const AddOns = [
    {
      type: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      type: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      type: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  // const inputs = React.useRef<(HTMLInputElement | null)[]>([]);
  //   inputs.current.map((input) => {
  //     if (input?.checked) {
  //       console.log(input);
  //     }
  //   });

  const selectAddOn = (e: React.SyntheticEvent): void => {
    // currentTarget = input checkbox
    // Get grandparent of input to toggle class "selected" when clicked
    e.currentTarget.parentElement?.parentElement?.classList.toggle("selected");
  };

  return (
    <>
      <Title>Pick add-ons</Title>
      <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
      <AddOnsForm>
        {AddOns.map((addOn, index) => {
          return (
            <Option key={index}>
              <OptionInfo>
                <input type="checkbox" id={addOn.type} onClick={selectAddOn} />
                <OptionText>
                  <span>{addOn.type}</span>
                  <br />
                  <span>{addOn.description}</span>
                </OptionText>
              </OptionInfo>
              <OptionPrice>
                +$
                {data?.isYearly
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
