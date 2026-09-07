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
import {
  MobileBodyTextMedium,
  BodyTextMedium,
  MobileBreakpoint,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const OPTIONS: EmblaOptionsType = { loop: true };

const QuestionsList = styled.ul`
  width: 100%;
  min-width: 0;
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
  text-align: left;
  font-size: ${BodyTextMedium};

  li {
    display: flex;
    align-items: flex-start;
    gap: ${SpacingS};
    margin-bottom: ${SpacingXS};
    padding: ${SpacingXS} ${SpacingS};
    border-radius: ${SpacingXS};
    background: rgba(255, 255, 255, 0.06);
    line-height: 1.55;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  li:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(0.15rem);
  }

  .question-emoji {
    flex: 0 0 1.5rem;
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: rgba(233, 70, 98, 0.16);
    font-size: 1.25rem;
    line-height: 1.4;
    text-align: center;
  }

  .question-text {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};

    li {
      gap: ${SpacingXS};
      padding: ${SpacingXS};
    }

    .question-emoji {
      flex-basis: 1.35rem;
      width: 1.35rem;
      height: 1.35rem;
      font-size: 1.1rem;
    }
  }

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
        <CardWithBorder $alignLeft>
          <CardTitle>{about_joining_data_card.title}</CardTitle>
          <CardBody $alignLeft>
            {renderIntroduction(
              about_joining_data_card.introduction,
              about_joining_data_card.boldIntroductionPhrases,
            )}
          </CardBody>
          <QuestionsList>
            {about_joining_data_card.questions.map((question, index) => (
              <li key={question}>
                <span className="question-emoji" aria-hidden="true">
                  {about_joining_data_card.questionEmojis[index]}
                </span>
                <span className="question-text">{question}</span>
              </li>
            ))}
          </QuestionsList>
          <CardBody $alignLeft>
            {renderIntroduction(
              about_joining_data_card.conclusion,
              about_joining_data_card.boldConclusionPhrases,
            )}
          </CardBody>
          <div style={{ marginTop: "2rem" }}>
            <EmblaCarousel
              slides={about_joining_data_card.images}
              options={OPTIONS}
            />
          </div>
        </CardWithBorder>
      </CardContainer>
    </SectionContainer>
  );
}

export function VideoCards() {
  return (
    <SectionContainer>
      <CardContainer>
        <CardWithBorder $alignLeft>
          <CardTitle>{trailer_data_card.title}</CardTitle>
          <CardBody $alignLeft>{trailer_data_card.description}</CardBody>
          <VideoContainer>
            <video width="100%" controls>
              <source src={trailer_data_card.video} type="video/mp4" />
            </video>
          </VideoContainer>
        </CardWithBorder>
      </CardContainer>

      <CardContainer>
        <CardWithBorder $alignLeft>
          <CardTitle>{talk_data_card.title}</CardTitle>
          <CardBody $alignLeft>{talk_data_card.description}</CardBody>
          <VideoContainer>
            <video width="100%" controls>
              <source src={talk_data_card.video} type="video/mp4" />
            </video>
          </VideoContainer>
        </CardWithBorder>
      </CardContainer>
    </SectionContainer>
  );
}
