import styled from "styled-components";
import {
  BackgroundAccent,
  BodyText,
  BodyTextMedium,
  MaxElement,
  MobileBodyTextMedium,
  MobileBreakpoint,
  MobileTitleM,
  Primary100,
  Primary300,
  Primary500,
  Secondary100,
  Secondary300,
  Secondary500,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
  TitleL,
} from "@/app/genericComponents/tokens";

export const TransparentBackground = styled.div`
  margin: 0;
  padding: ${SpacingL} ${SpacingM};
  width: 100%;
  height: 100%;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingM} ${SpacingS};
  }
`;

export const Background = styled(TransparentBackground)`
  background: ${BackgroundAccent};
`;

interface CardWithBorderProps {
  $alignLeft?: boolean;
}

export const CardWithBorder = styled.div<CardWithBorderProps>`
  width: 100%;
  min-width: 0;
  padding: ${SpacingM} 0;
  text-align: ${({ $alignLeft }) => ($alignLeft ? "left" : "center")};
  border-radius: ${SpacingS};
  display: grid;
  max-width: ${MaxElement};

  > * {
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS} 0;
    text-align: center;
  }
`;

export const CardTitle = styled.h2`
  font-size: ${TitleL};
  margin-bottom: ${SpacingXS};
  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
    text-align: center;
  }
`;

interface CardBodyProps {
  $alignLeft?: boolean;
}

export const CardBody = styled.p<CardBodyProps>`
  font-size: ${BodyTextMedium};
  text-align: ${({ $alignLeft }) => ($alignLeft ? "left" : "justify")};
  line-height: 1.6667;
  margin: 0 0 ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
    text-align: justify;
    margin-bottom: ${SpacingS};
  }
`;

export const CardContainer = styled.div`
  margin: ${SpacingM} 0;
`;

export const VideoContainer = styled.div`
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${TitleL};
  text-align: left;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
    text-align: center;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  min-width: 0;
  max-width: ${MaxElement};
  margin: 0 auto;
`;

export const SectionDescription = styled.p`
  font-size: ${BodyTextMedium};
  text-align: justify;
  margin-top: ${SpacingXS};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
    text-align: justify;
    margin-top: ${SpacingXS};
  }
`;

export const CardWithBackground = styled.h2`
  background: ${Primary500};
  border-radius: ${SpacingS};
  padding: ${SpacingS};

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS};
  }
`;

interface ButtonProps {
  width?: string;
  disabled?: boolean;
}

const ButtonBasic = styled.a<ButtonProps>`
  padding: ${SpacingS} ${SpacingM};
  border-radius: ${SpacingXS};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${BodyText};
  width: ${(props) => props.width || "fit-content"};
  margin-top: ${SpacingXS};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS};
    width: 100%;
  }
`;

export const PrimaryButton = styled(ButtonBasic)`
  border: none;
  background-color: ${(props) => (props.disabled ? Primary100 : Primary300)};
  color: ${(props) => (props.disabled ? "gray" : "white")};

  &:hover {
    background-color: ${(props) => !props.disabled && Primary100};
    font-weight: ${(props) => !props.disabled && "bold"};
  }
  &:active {
    background-color: ${(props) => !props.disabled && Primary500};
    color: ${(props) => !props.disabled && "white"};
  }
`;

export const SecondaryButtonSmall = styled(ButtonBasic)`
  border: none;
  padding: ${SpacingS} ${SpacingM};
  background-color: ${(props) =>
    props.disabled ? Secondary100 : Secondary300};
  color: ${(props) => (props.disabled ? "gray" : "white")};
  font-size: ${BodyTextMedium};
  text-transform: initial;

  &:hover {
    background-color: ${(props) => !props.disabled && Secondary100};
    font-weight: ${(props) => !props.disabled && "bold"};
  }
  &:active {
    background-color: ${(props) => !props.disabled && Secondary500};
    color: ${(props) => !props.disabled && "white"};
  }
`;
