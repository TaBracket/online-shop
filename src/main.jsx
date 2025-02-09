import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import AppCtxProvider from "./services/contexts/AppCtx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppCtxProvider>
        <AppLayout />
      </AppCtxProvider>
    </BrowserRouter>
  </StrictMode>
);
