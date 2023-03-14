import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from "./components/Reviews";
import { Routes, Route } from "react-router-dom";
import { SingleReview } from "./components/SingleReview";
import { FeaturedReview } from "./components/FeaturedReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FeaturedReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
