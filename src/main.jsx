import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppCtxProvider from "./services/contexts/AppCtx";
import AuthCtxProvider from "./services/contexts/AuthCtx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCtxProvider>
        <AppCtxProvider>
          <AppLayout />
        </AppCtxProvider>
      </AuthCtxProvider>
    </BrowserRouter>
  </StrictMode>,
);
