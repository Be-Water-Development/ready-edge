import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LiveView from "./LiveView";
import { Commands } from "./Commands";
import { History } from "./History";
import { Settings } from "./Settings";
import { Setup } from "./Setup";
import { Update } from "./Update";

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LiveView  />} />
        <Route path="/live-view/*" element={<LiveView />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
