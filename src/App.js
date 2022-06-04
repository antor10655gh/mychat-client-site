import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Join from "./components/Join/Join";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Join></Join>}></Route>
        <Route path="/join" element={<Join></Join>}></Route>
      </Routes>
    </div>
  );
}

export default App;
