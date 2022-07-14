import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import Header1 from "./Header1";

const Container = styled.div`
  margin: 20px;
`;

export default function QuestionPage() {
  const params = useParams();
  const [question, setQuestion] = useState(false);

  function fetchQuestion() {
    axios
      .get("http://localhost:3030/questions/" + params.id)
      .then((response) => {
        setQuestion(response.data);
      });
  }
  useEffect(() => fetchQuestion(), []);

  return (
    <>
      <Container>
        {question && (
          <>
            <Header1>{question.title}</Header1>
            <ReactMarkdown
              children={question.content}
              remarkPlugins={[remarkGfm]}
            />
          </>
        )}
      </Container>
    </>
  );
}
