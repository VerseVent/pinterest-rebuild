import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-2 bg-gradient-to-r from-blue-500 to-indigo-900">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link className="mr-4" to="/">
          <i className="bi bi-house inline-flex items-center gap-1 text-white text-2xl font-mono not-italic">
            Home
          </i>
        </Link>
        <Link
          to={{
            pathname: "/profile",
          }}
        >
          <i className="bi bi-file-person inline-flex items-center gap-1 text-white text-2xl font-mono not-italic">
            Profile
          </i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
