import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Now } from "./Now";
import { Network } from "./Network";

const LiveView = () => {
  return (
    <div>
      {/* Nested Routes */}
      <Routes>
        <Route path="now" element={<Now />} />
        <Route path="network" element={<Network />} />
      </Routes>

      {/* This ensures that nested routes render inside LiveView */}
      <Outlet />
    </div>
  );
};

export default LiveView;
