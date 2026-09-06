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
import styled from "styled-components";
import { BodyTextMedium } from "@/app/genericComponents/tokens";

const OPTIONS: EmblaOptionsType = { loop: true };

const QuestionsList = styled.ul`
  width: 100%;
  min-width: 0;
  margin: 0 0 2rem;
  padding-left: 1.5rem;
  line-height: 1.6667;
  text-align: left;
  font-size: ${BodyTextMedium};
  overflow-wrap: anywhere;
`;

function renderIntroduction(text: string, boldPhrases: string[]) {
  const phrasePattern = new RegExp(`(${boldPhrases.join("|")})`, "g");
  return text
    .split(phrasePattern)
    .map((part) =>
      boldPhrases.includes(part) ? <strong key={part}>{part}</strong> : part,
    );
}

export default function PresentationCards() {
  return (
    <SectionContainer id="presentation-cards">
      <CardContainer>
        <CardWithBorder alignLeft>
          <CardTitle>{about_joining_data_card.title}</CardTitle>
          <CardBody alignLeft>
            {renderIntroduction(
              about_joining_data_card.introduction,
              about_joining_data_card.boldIntroductionPhrases,
            )}
          </CardBody>
          <QuestionsList>
            {about_joining_data_card.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </QuestionsList>
          <CardBody alignLeft>{about_joining_data_card.conclusion}</CardBody>
          <div style={{ marginTop: "2rem" }}>
            <EmblaCarousel
              slides={about_joining_data_card.images}
              options={OPTIONS}
            />
          </div>
        </CardWithBorder>
      </CardContainer>

      <CardContainer>
        <CardWithBorder alignLeft>
          <CardTitle>{talk_data_card.title}</CardTitle>
          <CardBody alignLeft>{talk_data_card.description}</CardBody>
          <VideoContainer>
            <video width="100%" controls>
              <source src={talk_data_card.video} type="video/mp4" />
            </video>
          </VideoContainer>
        </CardWithBorder>
      </CardContainer>

      <CardContainer>
        <CardWithBorder alignLeft>
          <CardTitle>{trailer_data_card.title}</CardTitle>
          <CardBody alignLeft>{trailer_data_card.description}</CardBody>
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
