import { useState } from "react";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import AskPage from "./components/AskPage";
import GlobalStyles from "./GlobalStyles";
import UserContext from "./UserContext";
import LoginPage from "./components/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={<QuestionsPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
