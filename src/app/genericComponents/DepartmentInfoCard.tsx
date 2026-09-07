import styled, { css } from "styled-components";
import { DepartmentInformation } from "@data/interfaces";
import {
  BodyTextMedium,
  MobileBodyTextMedium,
  MobileBreakpoint,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const QuestionButton = styled.button`
  width: 100%;
  border: 0;
  padding: ${SpacingS} 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: ${BodyTextMedium};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${SpacingS};

  > div {
    margin: 0;
    flex: 1;
    min-width: 0;
  }

  strong {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-right: ${SpacingS};

    @media (max-width: ${MobileBreakpoint}) {
      display: block;
      margin-right: 0;
    }
  }

  svg {
    flex: 0 0 auto;
    margin-top: 0.25rem;
  }

  &:focus-visible {
    outline: 0.15rem solid #ffffff;
    outline-offset: -0.15rem;
  }
`;

const QuestionText = styled.span`
  font-family: inherit;
  opacity: 0.5;
  font-size: ${BodyTextMedium};

  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    max-width: 32rem;
    margin-top: 0.35rem;
    font-size: ${MobileBodyTextMedium};
    line-height: 1.45;
    text-align: left;
    text-wrap: pretty;
  }
`;

const Answer = styled.div<{ isVisible: boolean }>`
  font-size: ${BodyTextMedium};
  font-family: inherit;
  background: transparent;
  transition:
    max-height 0.35s ease,
    padding 0.35s ease,
    opacity 0.35s ease;
  max-height: 0;
  opacity: 0;
  line-height: 1.5rem;
  text-align: justify;
  overflow: hidden;
  font-weight: normal;
  margin: 0;
  padding: 0;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
    line-height: 1.5;
  }

  p {
    margin: 0 0 ${SpacingS};
  }

  p:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 60rem;
      opacity: 1;
      padding: 0 0 ${SpacingS};
    `}
`;

const CardForDepartment = styled.div`
  width: 100%;
  border: 0;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 0;
  overflow: hidden;
  background: transparent;
`;

type DepartmentInfoCardProps = DepartmentInformation & {
  active: boolean;
  onToggle: () => void;
};

function renderBoldPhrases(text: string, phrases: string[]) {
  if (phrases.length === 0) return text;

  const escapedPhrases = phrases.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const phrasePattern = new RegExp(`(${escapedPhrases.join("|")})`, "g");
  return text
    .split(phrasePattern)
    .map((part, index) =>
      phrases.includes(part) ? (
        <strong key={`${part}-${index}`}>{part}</strong>
      ) : (
        part
      ),
    );
}

export default function DepartmentInfoCard(props: DepartmentInfoCardProps) {
  const { name, question, information, boldInformationPhrases = [] } = props;
  const { active, onToggle } = props;
  const answerId = `${name.replace(/\W+/g, "-").toLowerCase()}-answer`;

  return (
    <>
      <CardForDepartment>
        <QuestionButton
          type="button"
          aria-expanded={active}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <div>
            <strong>{name}</strong>
            <QuestionText>{question}</QuestionText>
          </div>
          <FontAwesomeIcon icon={active ? faMinus : faPlus} color={"#FFFFFF"} />
        </QuestionButton>
        <Answer id={answerId} isVisible={active}>
          {information.map((paragraph) => (
            <p key={paragraph}>
              {renderBoldPhrases(paragraph, boldInformationPhrases)}
            </p>
          ))}
        </Answer>
      </CardForDepartment>
    </>
  );
}
