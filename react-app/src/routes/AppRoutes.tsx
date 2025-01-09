import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import Components from "@pages/sample/Components";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/business" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes