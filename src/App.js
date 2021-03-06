import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/utils.css";
import "./App.css";
import { RequireAuth } from "./RequireAuth";
import { Archieve, Home, Label, Login, PageNotFound, Signup, TextEditor, Trash } from "./Pages";
import { useTheme } from "./Context/themeContext";


function App() {

  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-dark"} ${theme === "light" ? "color-black" : "color-white"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-editor" element={
          <RequireAuth>
            <TextEditor />
          </RequireAuth>
        } />
        <Route path="/label" element={<Label/>} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archieve" element={<Archieve />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;