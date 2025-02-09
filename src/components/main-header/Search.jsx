import React from "react";
import "./../../styles/components/search.css";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <div className="search">
      <input type="text" />
      <button>
        <FaSearch />
      </button>
    </div>
  );
}
