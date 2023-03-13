import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from "./components/Reviews";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<p>home placeholder</p>} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
