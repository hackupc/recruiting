import styled from "styled-components";
import {
  MobileBreakpoint,
  MobileTitleXL,
  SpacingL,
  SpacingM,
  SpacingXXL,
  TitleXL,
} from "@/app/genericComponents/tokens";
import { hero_data } from "@data/hero_data";
import { PrimaryButton } from "@/app/genericComponents/General";

const Container = styled.div`
  margin: ${SpacingL} auto;
  padding: ${SpacingXXL};
  background-image: url("/hackupcLogo.svg");
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingM};
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${TitleXL};
  background: transparent;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleXL};
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
