import React from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import App from "../app/App";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <App />
      <Footer />
    </div>
  );
}
