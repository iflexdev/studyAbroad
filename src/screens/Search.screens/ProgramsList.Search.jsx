import React from "react";
import { X } from "lucide-react";
import ProgramCard from "./ProgramCard.Search";

export default function programList({ programCards, setfilteredProgramsByBudget, selectedFilterItem, setCallFilterFunction }) {

  const shortBy = [
    // "Alphabetical",
    "Fees - Low to High",
    "Fees - High to Low",
  ];

  // Convert application_fees safely
  const getFee = (fee) => {
    if (fee === null || fee === "null") return 0;
    return Number(fee);
  };

  function sortPrograms(val) {
    if (val == 'Fees - Low to High') {
      const ascending = [...programCards].sort((a, b) => getFee(a.tution_fee) - getFee(b.tution_fee));
      setfilteredProgramsByBudget(ascending);
    }
    else {
      const descending = [...programCards].sort((a, b) => getFee(b.tution_fee) - getFee(a.tution_fee));
      setfilteredProgramsByBudget(descending);
    }
  }

  function filterPrograms(data) {
    const filterProperties = {
      label: data?.filterTitle,
      id: data?.course_id || data?.id,
      isChecked: false,
      item: data
    }
    setCallFilterFunction(filterProperties);
  }

  return (
    <>
      <div className="space-y-4">
        <div className="h-12 flex justify-between items-center">
          <div className="flex gap-4 overflow-x-auto w-[1150px] custom-scrollbar">
            {(selectedFilterItem || []).map((data) => (
              <div className="rounded-full bg-gray-200 text-gray-500 border px-3 py-1 flex justify-between items-center gap-2">
                <p className="text-sm whitespace-nowrap">{data?.name || data?.title}</p>
                <X className="w-3 cursor-pointer" onClick={() => filterPrograms(data)} />
              </div>
            ))}
          </div>

          <div className=""></div>
          <div className="flex items-center gap-2">
            <label htmlFor="">Sort By:</label>
            <select className="h-12 w-[191px] px-1 rounded bg-gray-50 border" onChange={(e) => sortPrograms(e.target.value)}>
              <option selected disabled>
                Select option
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
