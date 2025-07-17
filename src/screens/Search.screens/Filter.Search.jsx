import React, { useEffect, useState } from "react";
import { filters } from "./filter";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Filter() {
  const [open, setOpen] = useState(new Set());

  useEffect(() => {
    const allOpen = new Set(filters.map((_, index) => index));
    // if (!open) {
    setOpen(allOpen);
    //   toggleClose(0);
    // }
  }, []);
  const toggleClose = (id) => {
    setOpen((prev) => {
      const newOpen = new Set(prev);
      if (newOpen.has(id)) {
        newOpen.delete(id);
      } else {
        newOpen.add(id);
      }
      return newOpen;
    });
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col justify-start gap-y-4 items-start">
          <h2 className="text-2xl font-semibold">Filter</h2>
          <input
            type="text"
            placeholder="Search"
            className="w-full border-2 border-gray-300 rounded h-12 p-2 bg-gray-100"
          />
        </div>

        <div className="">
          {filters.map((filter, index) => {
            const isOpen = open.has(index);
            return (
              <div
                className="flex flex-col justify-start items-start mt-4 border"
                key={filter.id}
              >
                <div
                  // id={filter.id}
                  onClick={() => toggleClose(index)}
                  className={`h-12 flex justify-between items-center w-full px-4 ${
                    isOpen ? "FilterHeaderBg" : "bg-white"
                  }`}
                >
                  <h2 className="text-base font-semibold">{filter.title}</h2>
                  <span className="">
                    {open ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isOpen && (
                  <div className="max-h-[220px] overflow-y-scroll no-scrollbar py-3 w-full px-4">
                    {Array.isArray(filter?.options)
                      ? filter.options.map((item) => (
                          <div
                            className="flex items-center justify-between py-1"
                            key={item.id}
                          >
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="w-[18px] h-[18px]"
                                id={item.id}
                              />
                              <span className="ml-2 text-[14px]">
                                {item.label}
                              </span>
                            </div>
                            <div>
                              <p className="text-[12px] text-gray-400">
                                {item.count}
                              </p>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
