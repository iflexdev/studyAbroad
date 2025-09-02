import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProgramCard({ card }) {
  const [intake, setintake] = useState({});

  function getIntakeLevels(card) {
    const monthsArray = JSON.parse(card?.intakes || "[]");
    if (!monthsArray?.length) return { low: null, medium: null, high: null };

    // Month name → number (0-11)
    const monthMap = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    const now = new Date();
    const currentMonth = now.getMonth(); // 0-11
    const currentYear = now.getFullYear();

    // Helper → build [Month, Year] with year rollover
    function buildMonthYear(monthName) {
      if (!monthName) return null;
      const mNum = monthMap[monthName];
      let year = currentYear;
      if (mNum < currentMonth) {
        year = currentYear + 1; // If month is before current → next year
      }
      return [monthName, year];
    }

    // Find current month in intake array
    const currMonthName = Object.keys(monthMap).find(
      (key) => monthMap[key] === currentMonth
    );
    let currIndex = monthsArray.indexOf(currMonthName);

    // If current month not found → fallback to first element
    if (currIndex === -1) currIndex = 0;

    // --- Handle based on available months ---
    if (monthsArray.length === 1) {
      return {
        low: buildMonthYear(monthsArray[0]),
        medium: null,
        high: null,
      };
    }

    if (monthsArray.length === 2) {
      return {
        low: buildMonthYear(monthsArray[currIndex]),
        medium: buildMonthYear(monthsArray[(currIndex + 1) % 2]),
        high: null,
      };
    }

    // If 3 or more → circular logic
    const lowMonth = monthsArray[currIndex];
    const mediumMonth = monthsArray[(currIndex + 1) % monthsArray.length];
    const highMonth = monthsArray[(currIndex + 2) % monthsArray.length];

    return {
      low: buildMonthYear(lowMonth),
      medium: buildMonthYear(mediumMonth),
      high: buildMonthYear(highMonth),
    };
  }

  useEffect(() => {
    const intakeData = getIntakeLevels(card);
    setintake(intakeData);
  }, [card]);

  const navigate = useNavigate();

  function convertCurrency(price, currency) {
    if (currency === 'CAD') {
      const amount = price * 0.016;
      return parseInt(amount)+' CAD';
    }
    else if (currency === 'AUD') {
      const amount = price * 0.018;
      return parseInt(amount)+' AUD';
    }
    else {
      return price+' INR';
    }
  }

  // navigate("../program-detail")
  function openProgramDetail(item){
    navigate(`../program-detail/${item?.id}`);
  }

  return (
    <>
      {/* h-[598px] */}
      <div
        id={card.id}
        className="group h-auto border-2 p-5 rounded-2xl flex flex-col gap-y-5 justify-between hover:bg-[#F5F8FA] transform transition-all ease-linear delay-100"
      >
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-rows-1 grid-cols-[auto_auto] justify-start items-start h-[82px] gap-x-5">
            <div className="w-[79px] h-[79px] rounded-full border overflow-hidden border-green-700 flex justify-center items-center">
              <img
                src={card.logo !== "" ? card.logo : "/logo/favicon.svg"}
                // src={card.logo ||"/logo/favicon.svg"}
                alt="University Logo"
                className="object-contain max-w-full max-h-full p-4 mx-auto my-auto"
              />
            </div>
            <div className="flex-col gap-y-3.5 flex">
              <p
                id={card.university_id}
                className="font-semibold text-lg capitalize line line-clamp-2 cursor-pointer"
                onClick={() => navigate("../university-detail")}
              >
                {card.university_name || "University name not found"}
              </p>
              <div className="flex justify-start items-start gap-2 overflow-hidden w-[314px]">
                <p
                  id={card.study_levels_id}
                  className="rounded-sm capitalize bg-gray-100 text-gray-500 border h-6 px-2 py-2 w-fit flex justify-between items-center"
                >
                  {card.study_levels || "not found"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p
              id={card.program_id}
              className="font-medium text-[21px] capitalize line-clamp-2"
            >
              {card.program_name}
            </p>
          </div>
        </div>

        <div className="overflow-auto no-scrollbar flex flex-col gap-y-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-gray-700">
            <div>
              <p className="text-gray-400 text-[13.46px]">Location</p>
              <p className="font-medium text-base">
                <span id={card.country_id}>
                  {card.country_name || "not found"}
                </span>
                {", "}
                <span>{card.currency || ""}</span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[13.46px]">Campus city</p>
              <p className="font-medium text-base">
                <span id={card.city_id}>{card.city_name || "not found"}</span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[13.46px]">Tuition Fees</p>
              <p className="font-medium text-base">
                {(convertCurrency(parseInt(card.tution_fee), card.currency))}
                {/* {convertCurrency()} */}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[13.46px]">Application fee</p>
              <p className="font-medium text-base">
                <span>
                  {card.application_fees || 0} {card.currency || ""}
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[13.46px]">Duration</p>
              <p className="font-medium text-base">
                {card.total_duration || "not found"}
              </p>
            </div>
          </div>
          <hr className="" />
          <div className="flex flex-col gap-y-3">
            <p className="font-medium text-[13.46px] text-gray-500">
              Success Prediction
            </p>
            {card?.intakes != "null" ? (
              <div className="grid grid-cols-3 gap-4">
                {intake?.low && (
                  <div className="flex flex-col text-center gap-y-1 ">
                    <p className="text-gray-400 text-[13.46px]">
                      {intake?.low?.[0] + " " + intake?.low?.[1]}
                    </p>
                    <div className="w-full text-center py-1 text-xs bg-yellow-100">
                      Low
                    </div>
                  </div>
                )}
                {intake?.medium && (
                  <div className="flex flex-col text-center gap-y-1 ">
                    <p className="text-gray-400 text-[13.46px]">
                      {intake?.medium?.[0] + " " + intake?.medium?.[1]}
                    </p>
                    <div className="w-full text-center py-1 text-xs bg-green-100">
                      High
                    </div>
                  </div>
                )}
                {intake?.high && (
                  <div className="flex flex-col text-center gap-y-1 ">
                    <p className="text-gray-400 text-[13.46px]">
                      {intake?.high?.[0] + " " + intake?.high?.[1]}
                    </p>
                    <div className="w-full text-center py-1 text-xs bg-green-200">
                      Very High
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col text-center gap-y-2">
                <p className="text-gray-400 text-[13.46px]">no date provided</p>
                <div className="w-full text-center py-1 text-xs bg-blue-50">
                  We will update soon
                </div>
              </div>
            )}
          </div>
          <div className="h-[46px]">
            <button
              className="w-full group-hover:bg-[#1f5fc7] group-hover:text-white h-full rounded-lg text-base border-gray-300 border-2 text-gray-600 bg-secondary hover:bg-[#1f5fc7] hover:text-white transform transition-all ease-in-out font-semibold cursor-pointer"
              onClick={() => openProgramDetail(card)}
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
