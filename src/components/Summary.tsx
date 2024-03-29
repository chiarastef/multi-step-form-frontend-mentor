import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import { Plans } from "../data/plansData";
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

const SummaryEl = styled.div`
  grid-template-columns: repeat(2, 1fr);
  background-color: #fafbff;
  padding: 15px;
`;

const Plan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 10px;

  div:not(button) {
    font-weight: 700;
    font-size: 14px;
    color: var(--primary-color);
  }
`;

const PlanName = styled.div`
  text-transform: capitalize;
`;

const ChangeBtn = styled.button`
  font-family: inherit;
  text-decoration: underline;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 150ms ease-in;

  &:hover {
    color: var(--accent-color);
  }
`;

const AddOnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-top: var(--border);
  padding-top: 12px;

  div:first-of-type {
    color: var(--text-color);
  }

  div:last-of-type {
    font-weight: 500;
    color: var(--primary-color);
  }
`;

const AddOn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 15px;

  div:first-of-type {
    color: var(--text-color);
  }

  div:last-of-type {
    font-weight: 700;
    color: #473dff;
  }
`;
const Summary = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { planInfo, setPage } = appContext;

  let planPrice = 0;
  let total = 0;

  // Get summary data only if user selected a plan
  if (planInfo.planName) {
    const planSelected = Plans.filter(
      (plan) => planInfo.planName === plan.type
    );
    planPrice = planInfo.isYearly
      ? planSelected[0].yearlyPrice
      : planSelected[0].monthlyPrice;

    total = planPrice;
  }

  if (planInfo.planName) {
    return (
      <>
        <Title>Finishing up</Title>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>
        <SummaryEl>
          <Plan>
            <div>
              <PlanName>
                {planInfo.planName} ({planInfo.isYearly ? "yearly" : "monthly"})
              </PlanName>
              <ChangeBtn onClick={() => setPage(2)}>Change</ChangeBtn>
            </div>
            <div>
              ${planPrice}/{planInfo.isYearly ? "yr" : "mo"}
            </div>
          </Plan>
          <AddOnsContainer>
            {planInfo.addOns.length > 0
              ? planInfo.addOns.map((addOn) => {
                  const addOnsSelected = AddOns.filter(
                    (addOnData) => addOn === addOnData.type
                  );
                  const addOnPrice = planInfo.isYearly
                    ? addOnsSelected[0].yearlyPrice
                    : addOnsSelected[0].monthlyPrice;

                  total += addOnPrice;

                  return (
                    <AddOn>
                      <div>{addOn}</div>
                      <div>
                        +${addOnPrice}/{planInfo.isYearly ? "yr" : "mo"}
                      </div>
                    </AddOn>
                  );
                })
              : "No add-ons selected."}
          </AddOnsContainer>
        </SummaryEl>
        <Total>
          <div>Total (per {planInfo.isYearly ? "year" : "month"})</div>
          <div>
            +${total}/{planInfo.isYearly ? "yr" : "mo"}
          </div>
        </Total>
      </>
    );
  } else {
    return (
      <>
        <Title>Finishing up</Title>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>
        <SummaryEl>
          Please, fill up the form to see the summary and confirm.
        </SummaryEl>
      </>
    );
  }
};

export default Summary;
