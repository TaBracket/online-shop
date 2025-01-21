import React from "react";
import { IoSearchSharp } from "react-icons/io5";
export default function Search() {
  return (
    <div className="header_search">
      <button>
        <IoSearchSharp />
      </button>
      <input type="text" />
    </div>
  );
}
