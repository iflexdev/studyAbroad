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
  const [filteredProgramsList, setfilteredProgramsList] = useState([]);
  const [filteredProgramsByBudget, setfilteredProgramsByBudget] = useState([]);

  const [filteredSideBarCountryList, setfilteredSideBarCountryList] = useState([]);
  const [filteredSideBarUniversityList, setfilteredSideBarUniversityList] = useState([]);
  const [filteredSideBarProgramsList, setfilteredSideBarProgramsList] = useState([]);
  const [filteredSideBarCourseList, setfilteredSideBarCourseList] = useState([]);

  /* --------------------------- program card state -------------------------- */
  const [programCards, setProgramCards] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*         useEffect to fetch data of country, programs and university        */
  /* -------------------------------------------------------------------------- */
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
        setfilteredSideBarCountryList(c.data || []);
      }
      if (u) {
        setUniversities(u.data || []);
        setfilteredSideBarUniversityList(u.data || []);
      }
      if (cl) {
        setCourseLevel(cl.data || []);
        setfilteredSideBarCourseList(cl.data || []);
      }
      if (pt) {
        setProgramTypes(pt.data || []);
        setfilteredSideBarProgramsList(pt.data || []);
      }
      if (pc) {
        setProgramCards(pc.data || []);
        setfilteredProgramsList(pc.data || []);
        setfilteredProgramsByBudget(pc.data || []);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-10 py-[22px] px-22 items-start">
        <div className="w-[340px]">
          <Filter
            countriesList={countries}
            universitiesList={universities}
            courseLevel={courseLevel}
            programTypes={programTypes}
            setfilteredProgramsList={setfilteredProgramsList}
            programCards={programCards}
            setfilteredSideBarCountryList={setfilteredSideBarCountryList}
            filteredSideBarCountryList={filteredSideBarCountryList}
            filteredSideBarUniversityList={filteredSideBarUniversityList}
            setfilteredSideBarUniversityList={setfilteredSideBarUniversityList}
            setfilteredSideBarProgramsList={setfilteredSideBarProgramsList}
            filteredSideBarProgramsList={filteredSideBarProgramsList}
            setfilteredSideBarCourseList={setfilteredSideBarCourseList}
            filteredSideBarCourseList={filteredSideBarCourseList}
            filteredProgramsList={filteredProgramsList}
            setfilteredProgramsByBudget={setfilteredProgramsByBudget}
            filteredProgramsByBudget={filteredProgramsByBudget}
          />
        </div>
        <div className="w-full">
          <ProgramList
            programCards={filteredProgramsByBudget}
            setfilteredProgramsList={setfilteredProgramsList}
          />
        </div>
      </div>
    </>
  );
}
