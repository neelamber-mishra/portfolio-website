import React, { useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar";
import Home from "./Home.jsx";

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
          <Home></Home>
      </div>
    </>
  );
}

export default App;
