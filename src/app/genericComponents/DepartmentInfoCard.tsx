import styled, { css } from "styled-components";
import { DepartmentInformation } from "@data/interfaces";
import {
  BodyText,
  BodyTextMedium,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { useState } from "react";
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
  font-size: ${BodyText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SpacingS};

  p {
    margin: 0;
    flex: 1;
  }

  strong {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-right: ${SpacingS};
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
  overflow: hidden;
  font-weight: normal;
  margin: 0;
  padding: 0;

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 30rem;
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

export default function DepartmentInfoCard(props: DepartmentInformation) {
  const { name, question, information } = props;
  const [active, setActive] = useState<boolean>(false);
  const answerId = `${name.replace(/\W+/g, "-").toLowerCase()}-answer`;

  return (
    <CardForDepartment>
      <QuestionButton
        type="button"
        aria-expanded={active}
        aria-controls={answerId}
        onClick={() => setActive(!active)}
      >
        <p>
          <strong>{name}</strong> <QuestionText>{question}</QuestionText>
        </p>
        <FontAwesomeIcon icon={active ? faMinus : faPlus} color={"#FFFFFF"} />
      </QuestionButton>
      <Answer id={answerId} isVisible={active}>
        {information}
      </Answer>
    </CardForDepartment>
  );
}
