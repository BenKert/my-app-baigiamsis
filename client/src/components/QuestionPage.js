import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestionPage({ match }) {
  console.log(props);
  function fetchQuestion() {
    axios
      .get("http://localhost:3030/questions/" + match.params.id)
      .then(console.log);
  }
  useEffect(() => fetchQuestion(), []);

  return <></>;
}
