import React from "react";
import Master from "containers/Master";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Master />
      </Router>
    </div>
  );
};

export default App;
