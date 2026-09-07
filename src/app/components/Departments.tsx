import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { departments_data } from "@data/departments_data";
import DepartmentInfoCard from "@/app/genericComponents/DepartmentInfoCard";
import styled from "styled-components";
import { useState } from "react";
import {
  BodyTextMedium,
  MobileBodyTextMedium,
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";

const DepartmentsDescription = styled(SectionDescription)`
  max-width: 70ch;
  font-size: ${BodyTextMedium};
  white-space: pre-line;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
  }
`;

const DepartmentsAccordion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    margin-top: ${SpacingS};
  }
`;

export default function Departments() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);

  return (
    <SectionContainer id={"departments"}>
      <SectionTitle>{departments_data.title}</SectionTitle>
      <DepartmentsDescription>
        {departments_data.description}
      </DepartmentsDescription>
      <DepartmentsAccordion>
        {departments_data.departments.map((department) => {
          const isOpen = openDepartment === department.name;

          return (
            <DepartmentInfoCard
              key={department.name}
              name={department.name}
              question={department.question}
              information={department.information}
              boldInformationPhrases={department.boldInformationPhrases}
              icon={department.icon}
              active={isOpen}
              onToggle={() =>
                setOpenDepartment(isOpen ? null : department.name)
              }
            />
          );
        })}
      </DepartmentsAccordion>
    </SectionContainer>
  );
}
