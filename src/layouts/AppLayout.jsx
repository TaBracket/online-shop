import React from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import App from "../app/App";
import styles from "./../styles/app-layout.module.css";
export default function AppLayout() {
  return (
    <div className={`${styles["container"]}`}>
      <Header />
      <App />
      <Footer />
    </div>
  );
}
