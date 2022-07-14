import { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import Header1 from "./Header1";
import BlueButtonLink from "./BlueButtonLink";
import axios from "axios";

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  function fetchQuestion() {
    axios
      .get("http://localhost:3030/questions", { withCredentials: true })
      .then((response) => {
        setQuestions(response.data);
      });
  }
  useEffect(() => fetchQuestion(), []);
  return (
    <main>
      <HeaderRow>
        <Header1 style={{ margin: 0 }}>Questions</Header1>
        <BlueButtonLink style={{ textDecoration: "none" }} to={"/ask"}>
          Ask&nbsp;Question
        </BlueButtonLink>
      </HeaderRow>
      {questions &&
        questions.length &&
        questions.map((question) => (
          <QuestionRow title={question.title} id={question.id} />
        ))}
    </main>
  );
}
