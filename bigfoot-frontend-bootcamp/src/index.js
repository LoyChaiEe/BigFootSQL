import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Sightings from "./components/Sightings";

import SightingForm from "./components/SightingForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Route that provides base app UI */}
      <Route path="/" element={<App />}>
        {/* Route that renders all sightings */}
        <Route index element={<Home />} />
        {/* Route that renders individual sightings */}
        <Route path="sightings/:sightingIndex" element={<Sightings />} />
        {/* Route that matches all other paths */}
        <Route path="*" element={"Nothing here!"} />
        <Route path="new" element={<SightingForm/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
