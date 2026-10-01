import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launcher from "@/components/launcher/Launcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
