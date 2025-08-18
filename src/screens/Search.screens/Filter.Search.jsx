import React, { useEffect, useState } from "react";
// import { filters } from "./filter";
import { ChevronDown } from "lucide-react";

export default function Filter({
  countries,
  universities,
  courseLevel,
  programTypes,
  setfilteredProgramsList,
  programCards,
  setfilteredSideBarCountryList,
  filteredSideBarCountryList,
  filteredSideBarUniversityList,
  setfilteredSideBarUniversityList,
  setfilteredSideBarProgramsList,
  filteredSideBarProgramsList,
  setfilteredSideBarCourseList,
  filteredSideBarCourseList
}) {
  const filtersTitle = [
    "Countries",
    "Universities",
    "Programs",
    "Course Level",
  ];
  const [open, setOpen] = useState(new Set());
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedCourseLevels, setSelectedCourseLevels] = useState([]);
  // const [searchQueries, setSearchQueries] = useState({});

  const filtersData = {
    Countries: filteredSideBarCountryList,
    Universities: filteredSideBarUniversityList,
    Programs: filteredSideBarProgramsList,
    "Course Level": filteredSideBarCourseList,
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

  /* -------------------------------------------------------------------------- */
  /*                filter the programs according to the side bar               */
  /* -------------------------------------------------------------------------- */
  const filterPrograms = (title, id, isChecked) => {
    const applyFilters = (countries, universities, programs, courseLevels) => {
      let filteredData = programCards;

      if (countries.length > 0) {
        filteredData = filteredData.filter((data) =>
          countries.includes(data?.country_id)
        );
      }

      if (universities.length > 0) {
        filteredData = filteredData.filter((data) =>
          universities.includes(data?.university_id)
        );
      }

      if (programs.length > 0) {
        filteredData = filteredData.filter((data) =>
          programs.includes(data?.program_id)
        );
      }

      if (courseLevels.length > 0) {
        filteredData = filteredData.filter((data) =>
          courseLevels.includes(data?.study_levels_id)
        );
      }

      setfilteredProgramsList(
        countries.length > 0 ||
          universities.length > 0 ||
          programs.length > 0 ||
          courseLevels.length > 0
          ? filteredData || []
          : programCards
      );
    };

    if (title === "Countries") {
      setSelectedCountries((prev) => {
        const updated = isChecked ? [...prev, id] : prev.filter((c) => c !== id);
        applyFilters(updated, selectedUniversities, selectedPrograms, selectedCourseLevels);
        return updated;
      });
    }

    if (title === "Universities") {
      setSelectedUniversities((prev) => {
        const updated = isChecked ? [...prev, id] : prev.filter((u) => u !== id);
        applyFilters(selectedCountries, updated, selectedPrograms, selectedCourseLevels);
        return updated;
      });
    }

    if (title === "Programs") {
      setSelectedPrograms((prev) => {
        const updated = isChecked ? [...prev, id] : prev.filter((p) => p !== id);
        applyFilters(selectedCountries, selectedUniversities, updated, selectedCourseLevels);
        return updated;
      });
    }

    if (title === "Course Level") {
      setSelectedCourseLevels((prev) => {
        const updated = isChecked ? [...prev, id] : prev.filter((lvl) => lvl !== id);
        applyFilters(selectedCountries, selectedUniversities, selectedPrograms, updated);
        return updated;
      });
    }
  };

  // const toggleAccordionFromSearch = (title, queryLength) => {
  //   setOpen((prev) => {
  //     const newOpen = new Set(prev);
  //     console.log("title... ", newOpen);
  //     if (newOpen?.has(title) && queryLength > 0) {
  //       return newOpen;
  //     }
  //     if (!newOpen?.has(title) && queryLength > 0) {
  //       return newOpen.add(title);
  //     }
  //     else if (newOpen?.has(title) && queryLength == 0) {
  //       newOpen.delete(title);
  //     }
  //   });
  // };

  const handleSearch = (title, query) => {
    // toggleAccordionFromSearch(title, query.length || 0);
    if (title == 'Countries') {
      const filteredList = countries.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarCountryList(filteredList);
    }
    else if (title == 'Universities') {
      const filteredList = universities.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarUniversityList(filteredList);
    }
    else if (title == 'Programs') {
      const filteredList = programTypes.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarProgramsList(filteredList);
    }
    else if (title == 'Course Level') {
      const filteredList = courseLevel.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarCourseList(filteredList);
    }
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
                  className={`h-12 flex justify-between items-center w-full px-4 ${open.has(title) ? "FilterHeaderBg" : "bg-white"
                    }`}
                >
                  <h2 className="text-base font-semibold uppercase">
                    {title}
                  </h2>
                  <span
                    className={`transition-transform duration-300 ease-in-out transform ${open.has(title) ? "rotate-180" : "rotate-0"
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
                    onChange={(e) => handleSearch(title, e.target.value)}
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
                          onChange={(e) => filterPrograms(title, title === "Programs" ? item.course_id : item.id, e.target.checked)}
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
