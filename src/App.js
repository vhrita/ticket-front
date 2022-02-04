import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Home } from "./pages/Home";
import { Gerar } from "./pages/Gerar";
import { GerarPreferencial } from "./pages/GerarPreferencial";
import { GerarNormal } from "./pages/GerarNormal";
import { Acompanhar } from "./pages/Acompanhar";
import { Gerenciar } from "./pages/Gerenciar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/acompanhar" element={<Acompanhar />} />
        <Route path="/gerenciar" element={<Gerenciar />} />
        <Route path="/gerar" element={<Gerar />} exact />
        <Route path="/gerar/p" element={<GerarPreferencial />} exact />
        <Route path="/gerar/n" element={<GerarNormal />} />
        <Route component={() => <div>Error 404 - Page Not Found :(</div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
