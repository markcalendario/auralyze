import HomePage from "@/pages/Home/Home.jsx";
import "@/styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuralyzePage from "./pages/Auralyze/Auralyze.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<HomePage />}
        />
        <Route
          index
          path="/auralyze"
          element={<AuralyzePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
