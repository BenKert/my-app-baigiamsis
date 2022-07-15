import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import Header1 from "./Header1";
import { checkPropTypes } from "prop-types";

const Container = styled.div`
  margin: 20px;
`;

const QuestionMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0;
`;

const UserLink = styled.a`
  color: #116466;
`;

export default function QuestionPage(props) {
  const params = useParams();
  const [question, setQuestion] = useState(false);

  function fetchQuestion() {
    axios
      .get("http://localhost:3030/questions/" + params.id)
      .then((response) => {
        setQuestion(response.data);
        console.log(question);
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
            <QuestionMeta>
              <div>Tags should be here</div>
              <WhoAndWhen>
                x time ago{" "}
                <UserLink to={"/users/" + props.id}>{question.email}</UserLink>
              </WhoAndWhen>
            </QuestionMeta>
          </>
        )}
      </Container>
    </>
  );
}
