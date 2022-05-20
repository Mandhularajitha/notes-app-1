import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./Context/notesContext";
import { AuthProvider } from "./Context/authContext";
import { ThemeProvider } from "./Context/themeContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <AuthProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AuthProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);