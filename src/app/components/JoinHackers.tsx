import {
  CardBody,
  CardContainer,
  CardTitle,
  CardWithBorder,
} from "@/app/genericComponents/General";
import { about_joining_data_card } from "@data/cards_data";
import EmblaCarousel from "@/app/genericComponents/EmblaCarousel";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function JoinHackers() {
  return (
    <CardContainer>
      <CardWithBorder>
        <CardTitle>{about_joining_data_card.title}</CardTitle>
        <CardBody>{about_joining_data_card.description}</CardBody>
        <EmblaCarousel
          slides={about_joining_data_card.images}
          options={OPTIONS}
        />
      </CardWithBorder>
    </CardContainer>
  );
}
