import React, { useEffect, useState } from "react";

export default function Search({ submitForm }) {
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    submitForm(userSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearch]);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setUserSearch(value);
  };

  return (
    <div className="max-w-6xl w-[100%] flex justify-between text-end">
      <h2 className="font-mono">Pinteresting</h2>
      <div className="w-[30%]">
        <input
          className="font-mono rounded-xl p-2 text-xl shadow-md mr-6 bg-gradient-to-r from-blue-500 to-indigo-900 focus:bg-sky-300 focus:placeholder:text-transparent disabled:opacity-75 placeholder:text-white text-black outline-none"
          placeholder="Enter image tag"
          value={userSearch}
          onChange={handleChange}
        />
        <i className="bi bi-search-heart hover:cursor-pointer hover:scale-125"></i>
      </div>
    </div>
  );
}
