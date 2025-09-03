import { useEffect, useState } from "react";
import ProgramCard from "../ProgramCard.Search";
import Banner from "./Banner.ProgramDetail";
import PriceCard from "./PriceCard.ProgramDetail";
import TabSection from "./TabSection.ProgamDetail";
import { useParams } from "react-router";
import { getAllProgramCards, getAllProgramsDetail } from "../../../api/ApiCallHandler.api";

export default function ProgramDetail() {
  const [programDetail, setProgramDetail] = useState([]);
  const [programList, setProgramList] = useState([]);
  const [alert, setAlert] = useState([]);
  const { id } = useParams();
  const [updateProgramID, setUpdateProgramID] = useState(id);

  /* -------------------------------------------------------------------------- */
  /*                        for fetching program detail data                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchProgramsDetail = async () => {
      const programDetailData = await getAllProgramsDetail(id, setAlert);
      setProgramDetail(programDetailData?.program);
    }
    fetchProgramsDetail();
  }, [updateProgramID, id]);

  /* -------------------------------------------------------------------------- */
  /*                        for fetching program detail data                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchAllPrograms = async () => {
      const programCards = await getAllProgramCards();
      const similerData = (programCards?.data || [])?.filter((item) => ((item.program_id == programDetail?.program_id) && item.id != id));
      setProgramList(similerData);
    }
    fetchAllPrograms();
  }, [programDetail]);

  return (
    <>
      {/*---------------------------- program detail Banner ----------------------------*/}
      <Banner programDetail={programDetail} />
      {/*---------------------------- program detail Details ----------------------------*/}
      <div className="px-[148px] py-[34px]">
        <div className="flex gap-x-[72px]">
          <div className="flex-1">
            <TabSection programDetail={programDetail} />
          </div>
          <div className="w-[477px]">
            <PriceCard programDetail={programDetail} />
          </div>
        </div>
        {/*---------------------------- similar program ----------------------------*/}
        {programList?.length > 0 &&
          <div className="flex flex-col gap-[34px]">
            <p className="font-semibold text-[25px] leading-[31px]">
              Similar Programs
            </p>
            <div className="flex gap-[30px] overflow-x-auto no-scrollbar">
              {(programList || []).map((card, index) => (
                <ProgramCard
                  key={index}
                  card={card}
                  setUpdateProgramID={setUpdateProgramID}
                />
              ))}
            </div>
          </div>
        }
      </div>
    </>
  );
}
