import React, { useEffect, useState } from "react";
// import { filters } from "./filter";
import { ChevronDown } from "lucide-react";

export default function Filter({
  countries,
  universities,
  courseLevel,
  programTypes,
}) {
  const filtersTitle = [
    "Countries",
    "Universities",
    "Programs",
    "Course Level",
  ];
  const [open, setOpen] = useState(new Set());
  // const [checked, setChecked] = useState(false);
  // const [alert, setAlert] = useState(null);

  const filtersData = {
    Countries: countries,
    Universities: universities,
    Programs: programTypes,
    "Course Level": courseLevel,
  };

  useEffect(() => {
    setOpen(new Set(filtersTitle));
  }, []);
  const toggleAccordion = (title) => {
    setOpen((prev) => {
      const newOpen = new Set(prev);
      if (newOpen.has(title)) {
        newOpen.delete(title);
      } else {
        newOpen.add(title);
      }
      return newOpen;
    });
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col justify-start gap-y-4 items-start">
          <h2 className="text-2xl font-semibold">Filter</h2>
        </div>

        <div className="">
          {filtersTitle.map((title) => (
            <div
              className="flex flex-col justify-start items-start mt-4 border"
              key={title}
            >
              <div className="w-full">
                <div
                  onClick={() => toggleAccordion(title)}
                  className={`h-12 flex justify-between items-center w-full px-4 ${
                    open.has(title) ? "FilterHeaderBg" : "bg-white"
                  }`}
                >
                  <h2 className="text-base font-semibold uppercase">
                    {title}
                  </h2>
                  <span
                    className={`transition-transform duration-300 ease-in-out transform ${
                      open.has(title) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-full border-y border-gray-300 px-1 py-1"
                    placeholder={`Search ${title}...`}
                  />
                </div>
              </div>
              {open.has(title) && (
                <div className="max-h-[220px] overflow-y-scroll no-scrollbar py-3 w-full px-4">
                  {(filtersData[title] || []).map((item, index) => (
                    <div
                      className="flex items-center justify-between gap-1 py-1"
                      key={index}
                    >
                      <div className="grid grid-cols-[18px_auto] items-center justify-start gap-2">
                        <input
                          type="checkbox"
                          className="w-[18px] h-[18px]"
                          id={item.id}
                          value={item.id || item.name || item.title}
                        />
                        <label className="text-[14px]">
                          {item.name || item.title}
                        </label>
                      </div>
                      <div>
                        <p className="text-[12px] text-gray-400">
                          {item.count || ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
