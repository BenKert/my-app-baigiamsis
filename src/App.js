import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import AskPage from "./components/AskPage";
import GlobalStyles from "./GlobalStyles";

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
