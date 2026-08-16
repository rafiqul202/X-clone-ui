import React from "react";
import ImageKit from "./ImageKit";

const Search = () => {
  return (
    <div className="bg-inputGray py-2 px-4 flex items-center justify-start gap-4 rounded-full">
      <ImageKit path="icons/icons/explore.svg" alt="search" w={16} h={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
};

export default Search;
