import styled from "styled-components";
import {
  BackgroundAccent,
  BodyText,
  BodyTextMedium,
  MaxElement,
  MobileBodyText,
  MobileBodyTextMedium,
  MobileBreakpoint,
  MobileTitleL,
  MobileTitleM,
  Primary300,
  Primary500,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXL,
  TitleL,
  TitleXL,
} from "@/app/genericComponents/tokens";

export const Background = styled.div`
  margin: 0;
  padding: ${SpacingXL} ${SpacingM};
  width: 100%;
  height: 100%;
  background: ${BackgroundAccent};
`;

export const TransparentBackground = styled.div`
  margin: 0;
  padding: ${SpacingXL} ${SpacingM};
  width: 100%;
  height: 100%;
`;

export const CardWithBorder = styled.div`
  margin: 0 auto;
  padding: ${SpacingL};
  text-align: center;
  border: 0.3333rem solid ${Primary300};
  border-radius: ${SpacingS};
  display: grid;
  max-width: ${MaxElement};

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingM};
  }
`;

export const CardTitle = styled.h2`
  font-size: ${TitleL};
  margin-bottom: ${SpacingS};
  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }
`;

export const CardBody = styled.p`
  font-size: ${BodyTextMedium};
  text-align: justify;
  line-height: 1.6667;
  margin-bottom: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
  }
`;

export const CardContainer = styled.div`
  margin: ${SpacingM};
`;

export const VideoContainer = styled.div`
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${TitleXL};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

export const SectionContainer = styled.div`
  max-width: ${MaxElement};
  margin: 0 auto;
`;

export const SectionDescription = styled.p`
  font-size: ${BodyText};
  text-align: justify;
  margin-top: ${SpacingS};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyText};
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
