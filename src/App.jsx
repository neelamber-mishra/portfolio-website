import React, { useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <div className="App">
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
      </div>
    </>
  );
}

export default App;
