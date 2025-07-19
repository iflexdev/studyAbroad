import React, { useEffect, useState } from "react";
import Filter from "./Filter.Search";
import ProgramList from "./ProgramsList.Search";
import {
  getAllCountries,
  getAllCourseLevel,
  getAllProgramCards,
  getAllProgramTypes,
  getAllUniversities,
} from "../../api/ApiCallHandler.api";

export default function SearchLayout() {
  /* ----------------------------- filters states ----------------------------- */
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [courseLevel, setCourseLevel] = useState([]);
  const [programTypes, setProgramTypes] = useState([]);

  /* --------------------------- program card state -------------------------- */
  const [programCards, setProgramCards] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const [c, u, cl, pt, pc] = await Promise.all([
        getAllCountries(),
        getAllUniversities(),
        getAllCourseLevel(),
        getAllProgramTypes(),
        getAllProgramCards(),
      ]);
      if (c) {
        setCountries(c.data || []);
      }
      if (u) {
        setUniversities(u.data || []);
      }
      if (cl) {
        setCourseLevel(cl.data || []);
      }
      if (pt) {
        setProgramTypes(pt.data || []);
      }
      if (pc) {
        setProgramCards(pc.data || []);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-10 py-[22px] px-22 items-start">
        <div className="w-[340px]">
          <Filter
          countries={countries}
          universities={universities}
          courseLevel={courseLevel}
          programTypes={programTypes}
          />
        </div>
        <div className="w-full">
          <ProgramList 
          programCards={programCards}
          />
        </div>
      </div>
    </>
  );
}
