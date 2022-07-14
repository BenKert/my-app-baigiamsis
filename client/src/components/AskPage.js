import styled from "styled-components";
import BlueButton from "./BlueButton";
import Header1 from "./Header1";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Input from "./Input";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  margin: 20px;
`;

const QuestionBodyTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  margin-bottom: 20px;
  color: #fff;
  font-family: inherit;
`;

const PreviewArea = styled.div`
  padding: 10px 20px;
  background-color: #444;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default function AskPage() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [navigateTo, setNavigateTo] = useState("");

  function sendTheQuestion(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3030/questions",
        {
          title: questionTitle,
          content: questionBody,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        setNavigateTo("/questions/" + response.data[0]);
      });
  }

  return (
    <Container>
      {navigateTo && <Navigate to={navigateTo} />}
      <Header1 style={{ marginBottom: "20px" }}>Ask a public question</Header1>
      <form onSubmit={(e) => sendTheQuestion(e)}>
        <Input
          type="text"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          placeholder="Title of your question"
        />
        <QuestionBodyTextarea
          onChange={(e) => setQuestionBody(e.target.value)}
          placeholder="Please describe your question and provide all of the info you can here!"
          value={questionBody}
        />
        <PreviewArea>
          <ReactMarkdown children={questionBody} remarkPlugins={[remarkGfm]} />
        </PreviewArea>
        <BlueButton type="submit">Post question</BlueButton>
      </form>
    </Container>
  );
}
