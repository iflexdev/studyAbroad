import React from "react";
import { X } from "lucide-react";
import ProgramCard from "./programCard.Search";

export default function programList({ programCards, setfilteredProgramsList }) {

  const shortBy = [
    // "Newly published",
    // "Oldest published",
    // "Alphabetical",
    "Low to High",
    "High to Low",
  ];

  // Convert application_fees safely
  const getFee = (fee) => {
    if (fee === null || fee === "null") return 0; // treat null as 0
    return Number(fee); // convert string to number
  };

  function sortPrograms(val) {
    if (val == 'Low to High') {
      const ascending = [...programCards].sort((a, b) => getFee(a.application_fees) - getFee(b.application_fees));
      setfilteredProgramsList(ascending);
    }
    else {
      const descending = [...programCards].sort((a, b) => getFee(b.application_fees) - getFee(a.application_fees));
      setfilteredProgramsList(descending);
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="h-12 flex justify-between items-center">
          {/* <div className="rounded-full bg-gray-200 text-gray-500 border px-3 py-1 flex justify-between items-center gap-2">
            <p className="text-sm ">filter search</p>
            <X className="w-3" />
          </div> */}
          <div className=""></div>
          <div className="flex items-center gap-2">
            <label htmlFor="">Short By:</label>
            <select className="h-12 w-[191px] px-1 rounded bg-gray-50 border" onChange={(e) => sortPrograms(e.target.value)}>
              <option selected disabled>
                Fees
              </option>
              {shortBy.map((item) => (
                <option value={item} className="">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          {programCards !== 0 ? (
            <p className="text-xs text-gray-400">
              <span className="font-bold">
                &#x2768; {programCards.length} &#x2769;
              </span>{" "}
              Results
            </p>
          ) : (
            <p className="text-xs text-gray-400">No Results</p>
          )}
        </div>
      </div>
      <div className="py-3 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {programCards.map((card) => (
          <ProgramCard card={card} />
        ))}
      </div>
    </>
  );
}
