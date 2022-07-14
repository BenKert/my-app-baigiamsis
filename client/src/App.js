import { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import AskPage from "./components/AskPage";
import RegisterPage from "./components/RegisterPage";
import GlobalStyles from "./GlobalStyles";
import UserContext from "./UserContext";
import LoginPage from "./components/LoginPage";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  function checkAuth() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3030/profile", { withCredentials: true })
        .then((res) => {
          setUser({ email: res.data });
          resolve(res.data);
        })
        .catch(() => {
          setUser(null);
          reject(null);
        });
    });
  }
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <Reset />
      <GlobalStyles />
      <UserContext.Provider value={{ user, checkAuth }}>
        <Header />
        <Routes>
          <Route path="/" element={<QuestionsPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
