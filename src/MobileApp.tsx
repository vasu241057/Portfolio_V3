// MobileApp.tsx
import React from "react";
import "./index.css";
import "./App.css";

import Contact from "./routes/Contact.tsx";

import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Home from "./routes/Home.tsx";
import Project from "./routes/Project.tsx";
import About from "./routes/About.tsx";

const MobileApp: React.FC = () => {
  return (
    <div>
      <SpeedInsights />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MobileApp;
