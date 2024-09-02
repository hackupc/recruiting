import styled, { css } from "styled-components";
import { CardWithBackground } from "@/app/genericComponents/General";
import { DepartmentInformation } from "@data/interfaces";
import {
  BodyText,
  BodyTextMedium,
  MobileBreakpoint,
  Primary100,
  Primary200,
  SpacingS,
  SpacingXS,
  TitleS,
} from "@/app/genericComponents/tokens";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DepartmentCardTitle = styled.div`
  font-size: ${TitleS};
  text-transform: uppercase;
  margin-top: ${SpacingS};
  margin-bottom: ${SpacingS};
  text-align: center;
`;

const Question = styled.div`
  font-size: ${BodyText};
  font-weight: bold;
  gap: ${SpacingXS};
  display: flex;
  align-items: center;
`;

const Answer = styled.p<{ isVisible: boolean }>`
  font-size: ${BodyTextMedium};
  transform-origin: top;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: scaleY(0);
  opacity: 0;
  line-height: 1.5rem;
  height: 0;
  visibility: hidden;
  font-weight: normal;

  ${(props) =>
    props.isVisible &&
    css`
      transform: scaleY(1);
      opacity: 1;
      height: auto;
      visibility: visible;
      margin: ${SpacingS} 0;
    `}
`;

const QuestionBox = styled.div`
  border-radius: ${SpacingS};
  background-color: ${Primary200};
  padding: ${SpacingS};
  cursor: pointer;

  &:hover {
    background-color: ${Primary100};
  }
`;

const CardForDepartment = styled(CardWithBackground)`
  width: 45%;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
  }
`;

export default function DepartmentInfoCard(props: DepartmentInformation) {
  const { name, question, information, icon } = props;
  const [active, setActive] = useState<boolean>(false);

  return (
    <CardForDepartment>
      <DepartmentCardTitle>
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          style={{ marginRight: "16px" }}
        />{" "}
        {name}
      </DepartmentCardTitle>

      <QuestionBox onClick={() => setActive(!active)}>
        <Question>
          <p>{question}</p>
          <FontAwesomeIcon
            icon={active ? faChevronUp : faChevronDown}
            color={"#FFFFFF"}
          />
        </Question>
        <Answer isVisible={active}>{information}</Answer>
      </QuestionBox>
    </CardForDepartment>
  );
}
