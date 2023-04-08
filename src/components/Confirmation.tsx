import styled from "styled-components";
import thankYouIcon from "../images/icon-thank-you.svg";

const ConfirmatioSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  margin: 35px 0;
`;

const Icon = styled.img`
  width: 65px;

  @media screen and (min-width: 1024px) {
    width: 70px;
  }
`;

const Title = styled.h2`
  font-size: var(--title-font-size-mobile);
  color: var(--primary-color);
  margin-top: 25px;
`;

const Paragraph = styled.p`
  font-size: var(--text-font-size-mobile);
  line-height: 1.5;
  color: var(--text-color);
  padding: 0 10px;
  margin-top: 15px;
`;

const Confirmation = () => {
  return (
    <ConfirmatioSection>
      <Icon src={thankYouIcon} alt="Thank you icon" />
      <Title>Thank you!</Title>
      <Paragraph>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Paragraph>
    </ConfirmatioSection>
  );
};

export default Confirmation;
