import React, { useEffect, useState } from "react";
// import { filters } from "./filter";
import { ChevronDown } from "lucide-react";

export default function Filter({
  countriesList,
  universitiesList,
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
  filteredSideBarCourseList,
  filteredProgramsList,
  setfilteredProgramsByBudget,
  filteredProgramsByBudget
}) {

  const applicationFeesSorted = programCards
    .map(item => Number(item.application_fees)) // convert to number
    .filter(fee => !isNaN(fee))                 // remove null or invalid
    .sort((a, b) => a - b);                     // sort ascending

  const filtersTitle = [
    "Countries",
    "Course Level",
    "Programs",
    "Universities",
    "Budget"
  ];

  const [open, setOpen] = useState(filtersTitle || []);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedCourseLevels, setSelectedCourseLevels] = useState([]);
  const [selectedUniqueID, setSelectedUniqueID] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [isCheckBoxSelected, setisCheckBoxSelected] = useState(false);
  // const [searchQueries, setSearchQueries] = useState({});

  const filtersData = {
    Countries: filteredSideBarCountryList,
    "Course Level": filteredSideBarCourseList,
    Universities: filteredSideBarUniversityList,
    Programs: filteredSideBarProgramsList,
    Budget: applicationFeesSorted
  };

  useEffect(() => {
    if (selectedUniqueID?.length > 0) {
      setisCheckBoxSelected(true);
    }
    if (selectedUniqueID?.length === 0) {
      setisCheckBoxSelected(false);
    }
  }, [selectedUniqueID]);

  useEffect(() => {
    const filteredCourseLevel = (() => {
      if (!courseLevel?.length || !programCards?.length) return [];
      const levelCount = Object.create(null); // faster than {}
      for (const { study_levels } of programCards) {
        if (study_levels) {
          levelCount[study_levels] = (levelCount[study_levels] || 0) + 1;
        }
      }
      const result = [];
      for (const item of courseLevel) {
        const count = levelCount[item.title];
        result.push({ ...item, count });
      }
      return result;
    })();
    setfilteredSideBarCourseList(filteredCourseLevel || []);

    const filteredPrograms = (() => {
      if (!programTypes?.length || !programCards?.length) return [];
      const levelCount = Object.create(null); // faster than {}
      for (const { program_name } of programCards) {
        if (program_name) {
          levelCount[program_name] = (levelCount[program_name] || 0) + 1;
        }
      }
      const result = [];
      for (const item of programTypes) {
        const count = levelCount[item.title];
        result.push({ ...item, count });
      }
      return result;
    })();
    setfilteredSideBarProgramsList(filteredPrograms || []);

  }, [programCards]);

  useEffect(() => {
    const filteredUniversities = (() => {
      if (!universitiesList?.length || !programCards?.length) return [];
      const levelCount = Object.create(null); // faster than {}
      for (const { university_name } of programCards) {
        if (university_name) {
          levelCount[university_name] = (levelCount[university_name] || 0) + 1;
        }
      }
      const result = [];
      for (const item of universitiesList) {
        const count = levelCount[item.name];
        result.push({ ...item, count });
      }
      return result;
    })();
    setfilteredSideBarUniversityList(filteredUniversities || []);

  }, [programCards]);

  // useEffect(() => {
  //   setOpen(filtersTitle);
  // }, []);

  // const toggleAccordion = (title) => {
  //   setOpen((prev) => {
  //     const newOpen = new Set(prev);
  //     if (newOpen.has(title)) {
  //       newOpen.delete(title);
  //     } else {
  //       newOpen.add(title);
  //     }
  //     return newOpen;
  //   });
  // };

  // Whenever selectedRanges changes, filter programs
  useEffect(() => {
    if (selectedRanges.length === 0) {
      setfilteredProgramsByBudget(filteredProgramsList || []); // Reset when no range selected
      return;
    }

    const filtered = filteredProgramsList.filter((item) => {
      const fee = Number(item.application_fees);
      return selectedRanges.some(({ min, max }) => fee >= min && fee <= max);
    });

    setfilteredProgramsByBudget(filtered);
  }, [selectedRanges]);

  // Whenever selectedRanges changes, filter programs
  useEffect(() => {
    setfilteredProgramsByBudget(filteredProgramsList);
  }, [filteredProgramsList]);


  const toggleAccordion = (title) => {
    setOpen((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };

  const toggleAccordion2 = (title, length) => {
    setOpen((prev) => {
      if (prev.includes(title) && length == 0) {
        return prev.filter((item) => item !== title);
      } else if (!prev.includes(title) && length > 0) {
        return [...prev, title];
      }
      else {
        return [...prev];
      }
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                filter the programs according to the side bar               */
  /* -------------------------------------------------------------------------- */
  const filterPrograms = (title, id, isChecked) => {
    const uniqueId = title + '_' + id;
    if (isChecked) {
      setSelectedUniqueID((prev) => {
        return [...prev, uniqueId];
      });
    }
    else {
      setSelectedUniqueID((prev) => {
        return prev.filter((item) => item !== uniqueId);
      });
    }

    // setSelectedUniqueID((prev) => {
    //   if (prev.includes(uniqueId)) {
    //     return prev.filter((item) => item !== uniqueId);
    //   } else if (!prev.includes(uniqueId)) {
    //     return [...prev, uniqueId];
    //   }
    // });

    const applyFilters = (countries, universities, programs, courseLevels) => {
      let filteredData = selectedRanges.length > 0 ? filteredProgramsByBudget : programCards;

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

      if (title == 'Countries') {
        if (programCards.length == filteredData?.length) {
          setfilteredSideBarUniversityList(universitiesList || []);
          setfilteredSideBarCourseList(courseLevel || []);
          setfilteredSideBarProgramsList(programTypes || []);
        }
        else {
          // const filteredUniversities = (() => {
          //   if (!universitiesList || !filteredData) return [];
          //   const universityIds = new Set(filteredData.map(data => data?.university_id));

          //   return universitiesList.filter(item => universityIds.has(item?.id));
          // })();
          // setfilteredSideBarUniversityList(filteredUniversities || []);
          const filteredUniversities = (() => {
            if (!universitiesList?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { university_name } of filteredData) {
              if (university_name) {
                levelCount[university_name] = (levelCount[university_name] || 0) + 1;
              }
            }
            const result = [];
            for (const item of universitiesList) {
              const count = levelCount[item.name];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarUniversityList(filteredUniversities || []);

          // const filteredCourseLevel = (() => {
          //   if (!courseLevel || !filteredData) return [];
          //   const course_levels_id = new Set(filteredData.map(data => data?.study_levels_id));
          //   return courseLevel.filter(item => course_levels_id.has(item?.id));
          // })();
          // setfilteredSideBarCourseList(filteredCourseLevel || []);

          const filteredCourseLevel = (() => {
            if (!courseLevel?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { study_levels } of filteredData) {
              if (study_levels) {
                levelCount[study_levels] = (levelCount[study_levels] || 0) + 1;
              }
            }
            const result = [];
            for (const item of courseLevel) {
              const count = levelCount[item.title];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarCourseList(filteredCourseLevel || []);

          // const filteredPrograms = (() => {
          //   if (!programTypes || !filteredData) return [];
          //   const programTypesIds = new Set(filteredData.map(data => data?.program_id));
          //   return programTypes.filter(item => programTypesIds.has(item?.course_id));
          // })();
          // setfilteredSideBarProgramsList(filteredPrograms || []);
          const filteredPrograms = (() => {
            if (!programTypes?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { program_name } of filteredData) {
              if (program_name) {
                levelCount[program_name] = (levelCount[program_name] || 0) + 1;
              }
            }
            const result = [];
            for (const item of programTypes) {
              const count = levelCount[item.title];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarProgramsList(filteredPrograms || []);

        }
      }
      else if (title == 'Course Level') {
        if (programCards.length == filteredData?.length) {
          setfilteredSideBarUniversityList(universitiesList || []);
          setfilteredSideBarProgramsList(programTypes || []);
        }
        else {
          const filteredUniversities = (() => {
            if (!universitiesList?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { university_name } of filteredData) {
              if (university_name) {
                levelCount[university_name] = (levelCount[university_name] || 0) + 1;
              }
            }
            const result = [];
            for (const item of universitiesList) {
              const count = levelCount[item.name];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarUniversityList(filteredUniversities || []);

          const filteredPrograms = (() => {
            if (!programTypes?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { program_name } of filteredData) {
              if (program_name) {
                levelCount[program_name] = (levelCount[program_name] || 0) + 1;
              }
            }
            const result = [];
            for (const item of programTypes) {
              const count = levelCount[item.title];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarProgramsList(filteredPrograms);
        }
      }
      else if (title == 'Programs') {
        if (programCards.length == filteredData?.length) {
          setfilteredSideBarUniversityList(universitiesList || []);
        }
        else {
          const filteredUniversities = (() => {
            if (!universitiesList?.length || !filteredData?.length) return [];
            const levelCount = Object.create(null); // faster than {}
            for (const { university_name } of filteredData) {
              if (university_name) {
                levelCount[university_name] = (levelCount[university_name] || 0) + 1;
              }
            }
            const result = [];
            for (const item of universitiesList) {
              const count = levelCount[item.name];
              if (count) result.push({ ...item, count });
            }
            return result;
          })();
          setfilteredSideBarUniversityList(filteredUniversities || []);
        }
      }
    };

    if (title === "Countries") {
      setSelectedCountries((prev) => {
        const updated = isChecked ? [...prev, id] : prev.filter((c) => c !== id);
        applyFilters(updated, selectedUniversities, selectedPrograms, selectedCourseLevels);
        return updated;
      });

      // const updated = isChecked ? [...selectedCountries, id] : selectedCountries.filter((c) => c !== id);

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

  const handleSearch = (title, query) => {
    // toggleAccordion(title, query?.length);
    toggleAccordion2(title, query?.length);
    if (title == 'Countries') {
      const filteredList = countriesList.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarCountryList(filteredList);
    }
    else if (title == 'Universities') {
      const filteredList = universitiesList.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarUniversityList(filteredList);
    }
    else if (title == 'Programs') {
      const filteredList = programTypes.filter((item) =>
        item.title?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarProgramsList(filteredList);
    }
    else if (title == 'Course Level') {
      const filteredList = courseLevel.filter((item) =>
        item.title?.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredSideBarCourseList(filteredList);
    }
  };


  function filterBudget(range, checked) {
    const [min, max] = range.split("-").map(Number);
    setSelectedRanges((prev) => {
      if (checked) {
        const exists = prev.some((r) => r.min === min && r.max === max);
        if (exists) return prev;
        return [...prev, { min, max }];
      } else {
        return prev.filter((r) => !(r.min === min && r.max === max));
      }
    });
  }

  function filterCount(name, title) {
    if (title == 'Countries') {
      const totalCountries = programCards?.filter((item) => item?.country_name === name);
      return totalCountries?.length;
    }
    if (title == 'Course Level') {
      const totalstudy_levels = programCards?.filter((item) => item?.study_levels === name);
      return totalstudy_levels?.length;
    }
    if (title == 'Programs') {
      const totalstudy_levels = programCards?.filter((item) => item?.program_name === name);
      return totalstudy_levels?.length;
    }
    if (title == 'Universities') {
      const totalstudy_levels = filteredProgramsList?.filter((item) => item?.university_name === name);
      return totalstudy_levels?.length;
    }
  }

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
                  className={`h-12 flex justify-between items-center w-full px-4 ${open.includes(title) ? "FilterHeaderBg" : "bg-white"}`}
                >
                  <h2 className="text-base font-semibold uppercase">
                    {title}
                  </h2>
                  <span
                    className={`transition-transform duration-300 ease-in-out transform ${open.includes(title) ? "rotate-180" : "rotate-0"}`}
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
              {open.includes(title) && (
                <div className="max-h-[220px] overflow-y-scroll no-scrollbar py-3 w-full px-4">
                  {title != 'Budget' && (filtersData[title] || []).map((item) => (
                    <div
                      className="flex items-center justify-between gap-1 py-1"
                    >
                      <div className="grid grid-cols-[18px_auto] items-center justify-start gap-2">
                        <input
                          type="checkbox"
                          className="w-[18px] h-[18px]"
                          id={title + '_' + item.id}
                          value={item.name || item.title}
                          checked={selectedUniqueID?.includes(title === "Programs" ? title + '_' + item.course_id : title + '_' + item.id)}
                          onChange={(e) => {
                            filterPrograms(
                              title,
                              // item,
                              title === "Programs" ? item.course_id : item.id,
                              e.target.checked
                            )
                          }
                          }
                        />
                        <label
                          htmlFor={title + '_' + item.id}
                          className="text-[14px] cursor-pointer"
                        >
                          {item.name || item.title}
                        </label>
                      </div>
                      <div>
                        <p className="text-[12px] text-gray-400">
                          {(title === 'Countries' || selectedUniqueID?.length === 0) ? filterCount(item.name || item.title, title) : item.count || 0}
                          {/* {filterCount(item.name || item.title, title)} */}
                        </p>
                      </div>
                    </div>
                  ))}

                  {title === 'Budget' && (() => {
                    // collect ranges from items
                    const ranges = (filtersData[title] || []).map((item) => {
                      const bucket = Math.floor(item / 200);      // 0, 1, 2, ...
                      const rangeStart = bucket * 200 + (bucket === 0 ? 0 : 1); // 0, 201, 401...
                      const rangeEnd = (bucket + 1) * 200;        // 200, 400, 600...
                      return `${rangeStart}-${rangeEnd}`;
                    });

                    // make ranges unique
                    const uniqueRanges = [...new Set(ranges)];

                    return uniqueRanges.map((range) => (
                      <div
                        key={range}
                        className="flex items-center justify-between gap-1 py-1"
                      >
                        <div className="grid grid-cols-[18px_auto] items-center justify-start gap-2">
                          <input
                            type="checkbox"
                            className="w-[18px] h-[18px]"
                            id={title + '_' + range}
                            value={range}
                            onChange={(e) => filterBudget(range, e.target.checked)}
                          />
                          <label
                            htmlFor={title + '_' + range}
                            className="text-[14px] cursor-pointer"
                          >
                            {range}
                          </label>
                        </div>
                      </div>
                    ));
                  })()}

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
