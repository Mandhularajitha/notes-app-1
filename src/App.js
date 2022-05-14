import React from "react"
import "./App.css"
import{Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Notes } from "./Pages/CreatNotes/Notes";

// import "/home/admin123/Desktop/note-app/src/Components/Navbar/Utilities/utilities.css"
// import { Navbar } from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home/>} />
      
        <Route path="/Notes" element={<Notes/>} />
    </Routes>
      
    </div>
  );
}

export default App;
