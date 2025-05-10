import HomePage from "@/pages/Home/Home.jsx";
import "@/styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
