import React from "react";
import Header from "./components/Header"; // 👈 Import your new Header
import Traverser from "./Traverser";

const App: React.FC = () => {
  return (
    <div>
      <Header /> {/* 👈 Render the header at the top */}
      <div style={{ marginTop: "70px" }}>
        <Traverser />
      </div>
    </div>
  );
};

export default App;