import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: var(--title-color);
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: var(--text-color);
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: var(--primary-color);
  font-size: 13px;
  letter-spacing: -0.5px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 15px;
  font-family: inherit;
  color: #9699ab;
  padding: 10px;
  border: 1px solid #9699ab;
  border-radius: 4px;
  margin-top: 5px;
`;

const PersonalInfo = () => {
  return (
    <>
      <Title>Personal Info</Title>
      <Paragraph>
        Please provide your name, email address, and phone number.
      </Paragraph>
      <form>
        <Label>
          Name
          <Input type="text" placeholder="e.g Stephen King" />
        </Label>
        <Label>
          Email Address
          <Input type="email" placeholder="e.g stephenking@lorem.com" />
        </Label>
        <Label>
          Phone Number
          <Input type="text" placeholder="e.g. +1 234 567 890" />
        </Label>
      </form>
    </>
  );
};

export default PersonalInfo;
