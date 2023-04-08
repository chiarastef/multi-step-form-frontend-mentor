import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { AppContext } from "../context";

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

const Label = styled.label`
  display: block;
  color: var(--primary-color);
  font-size: 13px;
  letter-spacing: -0.5px;
  margin-bottom: 5px;

  &:not(:first-of-type) {
    margin-top: 15px;
  }
`;

const Input = styled.div`
  & > div {
    width: 100%;
  }

  & input {
    display: block;
    width: 100%;
    font-size: 14px;
    font-family: inherit;
    padding: 10px;
    border: 1px solid #9699ab;
    border-radius: 4px;

    @media screen and (min-width: 1024px) {
      font-size: 15px;
    }
  }
`;

const PersonalInfo = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { personalInfo, setPersonalInfo, personalFormSubmitted } = appContext;

  return (
    <>
      <Title>Personal Info</Title>
      <Paragraph>
        Please provide your name, email address, and phone number.
      </Paragraph>
      <form>
        <Label>Name</Label>
        <Input>
          <TextField
            placeholder="e.g Stephen King"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
            error={personalFormSubmitted && !personalInfo.name}
            helperText={
              personalFormSubmitted &&
              !personalInfo.name &&
              "This field is required"
            }
          />
        </Input>
        <Label>Email Address</Label>
        <Input>
          <TextField
            type="email"
            placeholder="e.g stephenking@lorem.com"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
            error={personalFormSubmitted && !personalInfo.email}
            helperText={
              personalFormSubmitted &&
              !personalInfo.email &&
              "This field is required"
            }
          />
        </Input>
        <Label>Phone Number</Label>
        <Input>
          <TextField
            placeholder="e.g. +1 234 567 890"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
            }
            error={personalFormSubmitted && !personalInfo.phoneNumber}
            helperText={
              personalFormSubmitted &&
              !personalInfo.phoneNumber &&
              "This field is required"
            }
          />
        </Input>
      </form>
    </>
  );
};

export default PersonalInfo;
