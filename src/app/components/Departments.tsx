import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { departments_data } from "@data/departments_data";
import DepartmentInfoCard from "@/app/genericComponents/DepartmentInfoCard";
import styled from "styled-components";
import { SpacingM } from "@/app/genericComponents/tokens";

const DepartmentsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${SpacingM};
  margin-top: ${SpacingM};
`;

export default function Departments() {
  return (
    <SectionContainer id={"departments"}>
      <SectionTitle>{departments_data.title}</SectionTitle>
      <SectionDescription>{departments_data.description}</SectionDescription>
      <DepartmentsCards>
        {departments_data.departments.map((department) => (
          <DepartmentInfoCard
            key={department.name}
            name={department.name}
            question={department.question}
            information={department.information}
            icon={department.icon}
          />
        ))}
      </DepartmentsCards>
    </SectionContainer>
  );
}
