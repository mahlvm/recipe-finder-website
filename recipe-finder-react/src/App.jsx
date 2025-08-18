import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import About from "./pages/About";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}