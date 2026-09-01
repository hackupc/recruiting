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
} from "@/app/genericComponents/tokens";
import { hero_data } from "@data/hero_data";
import { PrimaryButton } from "@/app/genericComponents/General";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  padding: ${SpacingXXL};
  overflow: hidden;

  @media (max-width: ${MobileBreakpoint}) {
    min-height: 72vh;
    padding: ${SpacingS};
    padding-top: 5rem;
    padding-bottom: 3.5rem;
    justify-content: center;
    align-items: center;
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
    font-size: 3.2rem;
    line-height: 1.08;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: ${SmallMobileBreakpoint}) {
    font-size: 2.7rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    justify-content: center;
  }
`;

const ClosedMessage = styled.p`
  margin: 0;
  font-style: italic;
  text-align: center;
  color: #ffffff;
  font-size: 1rem;
`;

const DiscoverMoreButton = styled.button`
  display: none;
  margin: auto auto 0;
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem 0;

  @media (max-width: ${MobileBreakpoint}) {
    display: block;
  }
`;

export default function Hero() {
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("presentation-cards");
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container>
      <Title>{hero_data.title}</Title>
      <ButtonContainer>
        {hero_data.applicationsOpen ? (
          <PrimaryButton href={hero_data.applicationsLink} target={"_blank"}>
            {hero_data.applicationsOpenTextButton}
          </PrimaryButton>
        ) : (
          <ClosedMessage>{hero_data.applicationsClosedTextButton}</ClosedMessage>
        )}
      </ButtonContainer>
      <DiscoverMoreButton onClick={handleScrollToNextSection} type="button">
        Discover more
      </DiscoverMoreButton>
    </Container>
  );
}
