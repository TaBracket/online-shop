import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthCtxProvider from "./services/contexts/AuthCtx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthCtxProvider>
        <App />
      </AuthCtxProvider>
    </BrowserRouter>
  </StrictMode>
);
