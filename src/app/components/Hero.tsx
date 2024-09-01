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

const Container = styled.div`
  margin: ${SpacingL} auto;
  padding: ${SpacingXXL};
  background-image: url("./hackupcLogo.svg");
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

export default function Hero() {
  return (
    <Container>
      <Title>{hero_data.title}</Title>
    </Container>
  );
}
