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
