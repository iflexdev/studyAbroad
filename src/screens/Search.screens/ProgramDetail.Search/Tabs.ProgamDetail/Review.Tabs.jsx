import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Progress } from "../../../../utils/defaultHandlers/progress";
import { handleGetReviews } from "../../../../api/ApiCallHandler.api";
import Loader from "../../../../components/ui/Loader";

export default function Review({ Review }) {

  const [reviewDetail, setReviewDetail] = useState({});
  const [alert, setAlert] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadMore, setIsLoadMore] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                        for fetching program detail data                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchProgramsDetail = async () => {
      const programDetailData = await handleGetReviews(Review?.program_id, setAlert, setisLoading);
      setReviewDetail(programDetailData?.data || []);
      if (programDetailData?.data?.reviews?.length > 5) {
        setIsLoadMore(true);
      }
    }
    fetchProgramsDetail();
  }, [Review]);

  const shortBy = [
    "5 Star Rating",
    "4 Star Rating",
    "3 Star Rating",
    "2 Star Rating",
    "1 Star Rating",
  ];

  const ratingData = [
    {
      heading: "5 Star Rating",
      numberOfRates: reviewDetail?.five
    },
    {
      heading: "4 Star Rating",
      numberOfRates: reviewDetail?.four
    },
    {
      heading: "3 Star Rating",
      numberOfRates: reviewDetail?.three
    },
    {
      heading: "2 Star Rating",
      numberOfRates: reviewDetail?.two
    },
    {
      heading: "1 Star Rating",
      numberOfRates: reviewDetail?.one
    },
  ];

  // function randomNumber() {
  //   return Math.floor(Math.random() * 90) + 10;
  // }

  function toggleReviews() {
    if (visibleCount < reviewDetail?.reviews?.length) {
      setVisibleCount(reviewDetail?.reviews?.length);
    }
    else {
      setVisibleCount(5);
    }
  }

  // if(isLoading){

  // }


  return (
    <>
      <div className="flex flex-col gap-[34px]">
        <p className="text-2xl leading-[32px] font-semibold">Program Rating</p>
        <div className="grid grid-cols-[200px_1fr] gap-x-6">
          {/* ------------------------------ ratting gross ----------------------------- */}
          <div className="flex flex-col gap-y-[24px] w-[200px] h-[190px] items-center justify-center border">
            <p className="text-[48px] leading-[52px] font-semibold tracking-widest">
              {parseFloat(reviewDetail?.averageRating)?.toFixed(1)}
            </p>
            <p className="flex items-center gap-1 flex-col">
              {/* <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-5 text-yellow-500" />
                ))}
              </span> */}

              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starNumber = index + 1;
                  const isFull = starNumber <= Math.floor(parseFloat(reviewDetail?.averageRating)?.toFixed(1));
                  const isPartial = starNumber === Math.ceil(parseFloat(reviewDetail?.averageRating)?.toFixed(1)) && !isFull;

                  return (
                    <div key={index} className="relative w-5 h-5">
                      {/* Empty star (gray outline but filled transparent) */}
                      <Star className="w-5 h-5 text-yellow-500" />

                      {/* Filled star (solid yellow) */}
                      {(isFull || isPartial) && (
                        <Star
                          className="w-5 h-5 text-yellow-500 absolute top-0 left-0"
                          fill="currentColor"
                          style={
                            isPartial
                              ? {
                                clipPath: `inset(0 ${100 - (4.6 % 1) * 100}% 0 0)`,
                              }
                              : {}
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </span>

              <span className="text-sm leading-[20px] font-medium tracking-widest">
                Average Rating
              </span>
            </p>
          </div>
          {/* ------------------------------ ratting scale ----------------------------- */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-y-4">
              {ratingData?.map((item, index) => {
                const filledStars = 5 - index; // 5 → 1
                return (
                  <div key={index} className="flex items-center gap-6">
                    <p className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-5 h-5 text-yellow-500"
                          fill={starIndex < filledStars ? "currentColor" : "none"}
                          color={starIndex < filledStars ? "#facc15" : "#EAB308"} // yellow-400 or gray-300
                        />
                      ))}
                    </p>
                    <p className="text-sm leading-[22px] tracking-widest">
                      {item?.heading}
                    </p>
                    <p className="text-sm flex gap-6 items-center">
                      <Progress
                        className={"h-[8px] w-[376px] bg-gray-100"}
                        value={(filledStars * 100) / 5}
                        indicatorClassName={
                          "bg-gradient-to-r from-[#EAB308] to-[#FEF08A]"
                        }
                      />
                      {/* <span className="bg-yellow-500 h-[6px] w-[376px]"></span> */}
                      <span className="tracking-widest">{item?.numberOfRates}</span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="tracking-wide">
          <div className="flex justify-between">
            <p className="text-2xl leading-[32px] font-semibold">
              Students Feedback
            </p>
            <select
              className="h-12 w-[200px] px-1 rounded bg-gray-50 border"
            >
              <option selected disabled>
                Select Rating
              </option>
              {shortBy.map((item) => (
                <option value={item} className="">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* feedback section */}

        {reviewDetail?.reviews?.length == 0 ? (
          <p className="text-gray-500 ms-2 text-xl font-bold">
            No reviews yet
          </p>
        ) : (
          <div className="flex flex-col py-7 gap-7">
            {reviewDetail?.reviews
              ?.slice(0, visibleCount).map((review, index, arr) => (
                <div
                  key={review.id}
                  className={`grid grid-cols-[auto_1fr] pb-7 ${index !== arr.length - 1 ? "border-b" : ""
                    }`}
                >
                  {/* Left: Avatar */}
                  <div className="flex items-start px-4">
                    <img
                      src={review?.student_profile}
                      alt={review?.student}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Name + Time */}
                    <div className="flex flex-col ">
                      <div className="font-medium text-sm">{review?.student}
                        <span className="mx-2">•</span>
                        <span className="text-sm text-gray-500">
                          {review?.created_at}
                        </span></div>

                    </div>

                    {/* Rating Stars */}
                    <div className="flex p text-amber-400 ">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className=" text-gray-700 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}

            {/* Load More button */}
            {isLoadMore &&
              <button
                onClick={toggleReviews}
                className="bg-gray-200 w-fit py-2 px-6 rounded hover:bg-gray-300 transition flex items-center gap-2"
              >
                <span>
                  {visibleCount < reviewDetail?.reviews?.length ? "Load More" : "Show Less"}
                </span>
              </button>}
          </div>
        )}
      </div>

      {isLoading && (<Loader />)}
    </>
  );
}
