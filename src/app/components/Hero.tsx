import styled from "styled-components";
import {
  SmallMobileBreakpoint,
  MobileBreakpoint,
  MobileTitleXL,
  MobileTitleL,
  SpacingS,
  SpacingM,
  SpacingXXL,
  TitleXL,
  Primary300,
} from "@/app/genericComponents/tokens";
import { hero_data } from "@data/hero_data";
import { PrimaryButton } from "@/app/genericComponents/General";

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
  padding: ${SpacingXXL};
  border-radius: 20px;
  border: 0.3333rem solid ${Primary300};
  overflow: hidden;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/IMG_6219.jpeg");
    background-position: center 60%;
    background-size: cover;
    opacity: 0.3;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${TitleXL};
  background: transparent;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0);

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleXL};
  }

  @media (max-width: ${SmallMobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SpacingM};
`;

export default function Hero() {
  return (
    <Container>
      <Title>{hero_data.title}</Title>
      <ButtonContainer>
        {hero_data.applicationsOpen ? (
          <PrimaryButton href={hero_data.applicationsLink} target={"_blank"}>
            {hero_data.applicationsOpenTextButton}
          </PrimaryButton>
        ) : (
          <PrimaryButton disabled>
            {hero_data.applicationsClosedTextButton}
          </PrimaryButton>
        )}
      </ButtonContainer>
    </Container>
  );
}
