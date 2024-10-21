import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta que muestra el componente Panel */}
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
}

export default App;
