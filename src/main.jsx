import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./router/router.jsx";
import SmoothScroll from "./components/SmoothScroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <RouterProvider router={Router} />
    </SmoothScroll>
  </React.StrictMode>
);
