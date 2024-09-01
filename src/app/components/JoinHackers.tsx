import {
  CardBody,
  CardTitle,
  CardWithBorder,
} from "@/app/genericComponents/General";
import { about_joining_data_card } from "@data/cards_data";
import styled from "styled-components";
import { SpacingM } from "@/app/genericComponents/tokens";
import EmblaCarousel from "@/app/genericComponents/EmblaCarousel";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmblaOptionsType } from "embla-carousel";

const Container = styled.div`
  margin: ${SpacingM};
`;

const OPTIONS: EmblaOptionsType = {};

export default function JoinHackers() {
  return (
    <Container>
      <CardWithBorder>
        <CardTitle>{about_joining_data_card.title}</CardTitle>
        <CardBody>{about_joining_data_card.description}</CardBody>
        <EmblaCarousel
          slides={about_joining_data_card.images}
          options={OPTIONS}
        />
      </CardWithBorder>
    </Container>
  );
}
