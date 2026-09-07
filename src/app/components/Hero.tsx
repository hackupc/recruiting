import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  SmallMobileBreakpoint,
  MobileBreakpoint,
  SpacingS,
  SpacingM,
  SpacingXXL,
  BodyTextMedium,
  BodyTextSmall,
  HeroTitleXL,
  MobileTitleM,
  TitleL,
} from "@/app/genericComponents/tokens";
import { hero_data } from "@data/hero_data";
import { PrimaryButton } from "@/app/genericComponents/General";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HeroButton = styled(PrimaryButton)<{ $floating: boolean }>`
  width: fit-content;
  margin-top: 0;
  padding: 0.9rem 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  background: linear-gradient(135deg, #e94662, #cb264b);
  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.3);
  font-size: ${BodyTextMedium};
  font-weight: 700;
  text-transform: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  ${({ $floating }) =>
    $floating &&
    `
      position: fixed;
      top: 1rem;
      right: 1.5rem;
      z-index: 10;
      margin: 0;
    `}

  &:hover {
    background: linear-gradient(135deg, #ff627a, #df3c5a);
    box-shadow: 0 0.75rem 1.75rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.15rem);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: auto;
    max-width: 100%;
    padding: 0.8rem 1.35rem;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  padding: ${SpacingXXL};
  overflow: hidden;

  @media (max-width: ${MobileBreakpoint}) {
    min-height: clamp(28rem, 68svh, 40rem);
    padding: 4rem ${SpacingS};
    justify-content: center;
    align-items: center;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/IMG_6219.jpeg");
    background-position: center;
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
  font-size: ${HeroTitleXL};
  background: transparent;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0);

  @media (max-width: ${MobileBreakpoint}) {
    max-width: 22ch;
    font-size: clamp(2rem, 8vw, ${TitleL});
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: ${SmallMobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    justify-content: center;
    margin-top: ${SpacingS};
  }
`;

const ClosedMessage = styled.p`
  margin: 0;
  font-style: italic;
  text-align: center;
  color: #ffffff;
  font-size: ${BodyTextMedium};
  line-height: 1.45;
  max-width: 24rem;
`;

const DiscoverMoreButton = styled.button`
  display: none;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: ${BodyTextSmall};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem 0;
  transform: translateX(-50%);
  white-space: nowrap;

  svg {
    margin-left: 0.5rem;
    animation: discover-arrow 1.5s ease-in-out infinite;
  }

  @keyframes discover-arrow {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.35rem);
    }
  }

  @media (max-width: ${MobileBreakpoint}) {
    display: block;
  }
`;

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroScrolledPast, setIsHeroScrolledPast] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroScrolledPast(!entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("presentation-cards");
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container ref={heroRef}>
      <Title>{hero_data.title}</Title>
      <ButtonContainer>
        {hero_data.applicationsOpen ? (
          <HeroButton
            $floating={isHeroScrolledPast}
            href={hero_data.applicationsLink}
            target={"_blank"}
          >
            {hero_data.applicationsOpenTextButton}
          </HeroButton>
        ) : (
          <ClosedMessage>
            {hero_data.applicationsClosedTextButton}
          </ClosedMessage>
        )}
      </ButtonContainer>
      <DiscoverMoreButton onClick={handleScrollToNextSection} type="button">
        Discover more
        <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" />
      </DiscoverMoreButton>
    </Container>
  );
}
