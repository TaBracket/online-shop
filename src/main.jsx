import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthCtxProvider from "./services/contexts/AuthCtx.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCtxProvider>
        <AppLayout />
      </AuthCtxProvider>
    </BrowserRouter>
  </StrictMode>,
);
