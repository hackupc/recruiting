import styled from "styled-components";
import {
  BodyText,
  MaxElement,
  Primary300,
  SpacingL,
  SpacingM,
  SpacingS,
  TitleL,
} from "@/app/genericComponents/tokens";

export const CardWithBorder = styled.div`
  margin: 0 auto;
  padding: ${SpacingM} ${SpacingL};
  text-align: center;
  border: 0.3333rem solid ${Primary300};
  border-radius: ${SpacingS};
  display: grid;
  max-width: ${MaxElement};
`;

export const CardTitle = styled.h2`
  font-size: ${TitleL};
  margin-bottom: ${SpacingS};
`;

export const CardBody = styled.p`
  font-size: ${BodyText};
  text-align: justify;
  line-height: 1.6667;
  margin-bottom: ${SpacingM};
`;
