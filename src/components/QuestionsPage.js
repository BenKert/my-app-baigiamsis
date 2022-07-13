import styled from "styled-components";
import QuestionRow from "./QuestionRow";

const StyledHeader = styled.h1`
  font-size: 1.8rem;
  color: #fff;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const BlueButton = styled.button`
  background-color: #116466;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  border: 1px rgba(0, 0, 0, 0.5);
`;

export default function QuestionsPage() {
  return (
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
      </HeaderRow>
      <QuestionRow />
    </main>
  );
}
