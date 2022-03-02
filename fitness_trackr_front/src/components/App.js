import "./App.css";
import Home from "./Home";
import Routines from "./Routines";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </div>
  );
}

export default App;
