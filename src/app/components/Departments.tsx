import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { departments_data } from "@data/departments_data";
import DepartmentInfoCard from "@/app/genericComponents/DepartmentInfoCard";
import styled from "styled-components";
import { SpacingM } from "@/app/genericComponents/tokens";

const DepartmentsAccordion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${SpacingM};
`;

export default function Departments() {
  return (
    <SectionContainer id={"departments"}>
      <SectionTitle>{departments_data.title}</SectionTitle>
      <SectionDescription>{departments_data.description}</SectionDescription>
      <DepartmentsAccordion>
        {departments_data.departments.map((department) => (
          <DepartmentInfoCard
            key={department.name}
            name={department.name}
            question={department.question}
            information={department.information}
            icon={department.icon}
          />
        ))}
      </DepartmentsAccordion>
    </SectionContainer>
  );
}
