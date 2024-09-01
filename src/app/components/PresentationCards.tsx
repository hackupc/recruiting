import {
  CardBody,
  CardContainer,
  CardTitle,
  CardWithBorder,
  SectionContainer,
  VideoContainer,
} from "@/app/genericComponents/General";
import {
  about_joining_data_card,
  talk_data_card,
  trailer_data_card,
} from "@data/cards_data";
import EmblaCarousel from "@/app/genericComponents/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function PresentationCards() {
  return (
    <SectionContainer>
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

      <CardContainer>
        <CardWithBorder>
          <CardTitle>{talk_data_card.title}</CardTitle>
          <CardBody>{talk_data_card.description}</CardBody>
          <VideoContainer>
            <video width="100%" controls>
              <source src={talk_data_card.video} type="video/mp4" />
            </video>
          </VideoContainer>
        </CardWithBorder>
      </CardContainer>

      <CardContainer>
        <CardWithBorder>
          <CardTitle>{trailer_data_card.title}</CardTitle>
          <CardBody>{trailer_data_card.description}</CardBody>
          <VideoContainer>
            <video width="100%" controls>
              <source src={trailer_data_card.video} type="video/mp4" />
            </video>
          </VideoContainer>
        </CardWithBorder>
      </CardContainer>
    </SectionContainer>
  );
}
