import React from "react";
import Filter from "./Filter.Search";
import ProgramList from "./ProgramsList.Search";

export default function SearchLayout() {
  return (
    <>
      <div className="flex flex-row gap-10 py-[22px] px-10 items-start">
        <div className="w-[312px]">
          <Filter />
        </div>
        <div className="w-full">
          <ProgramList />
        </div>
      </div>
    </>
  );
}
