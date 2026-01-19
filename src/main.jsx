import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./router/router.jsx";
import SmoothScroll from "./components/SmoothScroll";
import Lenis from "lenis";
const lenis = new Lenis({
  smooth: true,
  duration: 1.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <RouterProvider router={Router} />
    </SmoothScroll>
  </React.StrictMode>
);
