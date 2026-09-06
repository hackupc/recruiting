import styled, { css } from "styled-components";
import { DepartmentInformation } from "@data/interfaces";
import {
  BodyText,
  BodyTextMedium,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const QuestionButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  border: 0;
  padding: ${SpacingS};
  background: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.12)" : "transparent"};
  color: inherit;
  cursor: pointer;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: ${BodyText};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }

  strong {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
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
  padding: 0 ${SpacingS};

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 30rem;
      opacity: 1;
      padding: ${SpacingS};
      border-top: 0.2rem solid #ffffff;
    `}
`;

const CardForDepartment = styled.div<{ $isActive: boolean }>`
  width: 100%;
  border: 0.1rem solid #ffffff;
  border-radius: 0;
  overflow: hidden;
  background: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 0.12)" : "transparent"};

  & + & {
    border-top: 0;
  }

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(255, 255, 255, 0.06)"};
  }
`;

export default function DepartmentInfoCard(props: DepartmentInformation) {
  const { name, question, information } = props;
  const [active, setActive] = useState<boolean>(false);
  const answerId = `${name.replace(/\W+/g, "-").toLowerCase()}-answer`;

  return (
    <CardForDepartment $isActive={active}>
      <QuestionButton
        type="button"
        isActive={active}
        aria-expanded={active}
        aria-controls={answerId}
        onClick={() => setActive(!active)}
      >
        <p>
          <strong>{name}</strong>: <QuestionText>{question}</QuestionText>
        </p>
        <FontAwesomeIcon
          icon={active ? faChevronUp : faChevronDown}
          color={"#FFFFFF"}
        />
      </QuestionButton>
      <Answer id={answerId} isVisible={active}>
        {information}
      </Answer>
    </CardForDepartment>
  );
}
