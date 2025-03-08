import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthCtxProvider from "./services/contexts/AuthCtx.jsx";
import AppCtxProvider from "./services/contexts/AppCtx.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCtxProvider>
        <AppCtxProvider>
          <App />
        </AppCtxProvider>
      </AuthCtxProvider>
    </BrowserRouter>
  </StrictMode>,
);
