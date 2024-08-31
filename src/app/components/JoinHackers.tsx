import {
  CardBody,
  CardTitle,
  CardWithBorder,
} from "@/app/genericComponents/General";
import { about_joining_data_card } from "@data/cards_data";
import styled from "styled-components";
import { SpacingM } from "@/app/genericComponents/tokens";

const Container = styled.div`
  margin: ${SpacingM};
`;

export default function JoinHackers() {
  return (
    <Container>
      <CardWithBorder>
        <CardTitle>{about_joining_data_card.title}</CardTitle>
        <CardBody>{about_joining_data_card.description}</CardBody>
      </CardWithBorder>
    </Container>
  );
}
