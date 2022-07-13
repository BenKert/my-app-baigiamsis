import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import AskPage from "./components/AskPage";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@400;500;700&family=Roboto:wght@400;700&display=swap');
body{
  background: #2C3531;
  color: #D1E8E2;
  font-family: Roboto, sans-serif;
}
b,strong {
  font-weight: 700;
}
a {
  color: #fff;
}
p {
  margin-bottom: 10px;
  line-height: 1.4rem;
}
blockquote {
  background-color: rgba(0,0,0,.1);
  padding: 15px;
  border-radius: 4px;
}
h1,h2 {
  margin-top: 15px;
  margin-bottom: 10px;
}
h1{
  font-size: 1.8rem;
}
h2{
  font-size: 1.6rem;
}
`;

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/ask" element={<AskPage />} />
        <Route path="/" element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
