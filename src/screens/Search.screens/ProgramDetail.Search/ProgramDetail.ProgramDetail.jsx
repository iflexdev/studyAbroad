import { useEffect, useState } from "react";
import ProgramCard from "../ProgramCard.Search";
import Banner from "./Banner.ProgramDetail";
import PriceCard from "./PriceCard.ProgramDetail";
import TabSection from "./TabSection.ProgamDetail";
import { useParams } from "react-router";
import { getAllProgramsDetail } from "../../../api/ApiCallHandler.api";

export default function ProgramDetail() {
  const [programDetail, setProgramDetail] = useState([]);
  const [alert, setAlert] = useState([]);
  const {id} = useParams();

  /* -------------------------------------------------------------------------- */
  /*                        for fetching live course data                       */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchLeaderBoardData = async () => {
      const LiveCourses = await getAllProgramsDetail(id, setAlert);
      setProgramDetail(LiveCourses?.program);
    }
    fetchLeaderBoardData();
  }, []);

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
        <div className="flex flex-col gap-[34px]">
          <p className="font-semibold text-[25px] leading-[31px]">
            Similar Programs
          </p>
          <div className="grid grid-cols-3 gap-[30px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProgramCard
                key={index}
                card={{
                  id: index,
                  university_name: `University Name ${index + 1}`,
                  study_levels: `Badges ${index + 1}`,
                  program_name: `Program Title ${index + 1}`,
                  country_name: `Country Name ${index + 1}`,
                  currency: `Currency ${index + 1}`,
                  city_name: `City Name ${index + 1}`,
                  tution_fee: `Tution Fee ${index + 1}`,
                  application_fees: `Application Fees ${index + 1}`,
                  total_duration: `Total Duration ${index + 1}`,
                  logo: `/logo/favicon.svg`,
                  description: `Sample description for program ${index + 1}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
