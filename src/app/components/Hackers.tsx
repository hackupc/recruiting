import {
  CardWithBackground,
  PrimaryButton,
  SecondaryButton,
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { hackers_data } from "@data/hackers_data";
import styled from "styled-components";
import {
  BodyTextMedium,
  MobileBreakpoint,
  SpacingM,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const LogoAndDescription = styled.div`
  display: flex;
  margin-top: ${SpacingM};
  justify-content: space-around;
  align-items: center;
  gap: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;

const LogoHackers = styled.img`
  width: 25%;

  @media (max-width: ${MobileBreakpoint}) {
    width: 70%;
  }
`;

const Description = styled.p`
  font-size: ${BodyTextMedium};
  font-weight: normal;
  line-height: 1.5rem;
`;

const CardsForHackers = styled(CardWithBackground)`
  width: 70%;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default function Hackers() {
  return (
    <SectionContainer>
      <SectionTitle>{hackers_data.title}</SectionTitle>
      <SectionDescription>{hackers_data.subtitle}</SectionDescription>
      <LogoAndDescription>
        <LogoHackers src={"/hackersatupcLogo.svg"} />
        <CardsForHackers>
          <Description>{hackers_data.description}</Description>
          <ButtonContainer>
            <SecondaryButton>{hackers_data.buttonText}</SecondaryButton>
          </ButtonContainer>
        </CardsForHackers>
      </LogoAndDescription>
    </SectionContainer>
  );
}
