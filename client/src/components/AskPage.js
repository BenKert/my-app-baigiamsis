import styled from "styled-components";
import BlueButton from "./BlueButton";
import Header1 from "./Header1";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Input from "./Input";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ReactTags from "react-tag-autocomplete";

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
  const reactTags = React.createRef();

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [navigateTo, setNavigateTo] = useState("");
  const [tags, setTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);

  function sendTheQuestion(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3030/questions",
        {
          title: questionTitle,
          content: questionBody,
          tags: tags.map((tag) => tag.id),
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        setNavigateTo("/questions/" + response.data[0]);
      });
  }

  function getTags() {
    axios.get("http://localhost:3030/tags").then((response) => {
      setTagSuggestions(response.data);
    });
  }

  function onTagAddition(tag) {
    const chosenTags = tags;
    chosenTags.push(tag);
    setTags(chosenTags);
  }

  function onTagDelete(indexToDelete) {
    const newTags = [];
    for (let i = 0; i < tags.length; i++) {
      if (i !== indexToDelete) {
        newTags.push(tags[i]);
      }
    }
    setTags(newTags);
  }

  useEffect(() => {
    getTags();
  }, []);
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
        <ReactTags
          ref={reactTags}
          tags={tags}
          suggestions={tagSuggestions}
          onDelete={(e) => onTagDelete(e)}
          onAddition={(e) => onTagAddition(e)}
        />
        <BlueButton type="submit">Post question</BlueButton>
      </form>
    </Container>
  );
}
