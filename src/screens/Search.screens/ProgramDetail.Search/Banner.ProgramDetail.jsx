import React, { useMemo, useState } from "react";
import { CalendarDays, MapPin, Star, UsersRound } from "lucide-react";
import ApplyToProgram from "./ApplyToProgram.ProgramDetail";
import VideoPlayer from "../../../utils/defaults/videoPlayer.VideoDoc";
import ImageLightbox from "../../../utils/defaultHandlers/ImageViewer";

export default function Banner({ programDetail, setAlert }) {
  const [isOpenToApply, setIsOpenToApply] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const slides = programDetail?.images?.map((url) => ({ src: url }));
  const imgListLength = programDetail?.images?.length;

  const handleImageOpen = () => {
    setCurrentIndex(0);
    setOpen(true);
  };

  /* -------------------------------------------------------------------------- */
  /*                               video provider                               */
  /* -------------------------------------------------------------------------- */
  const getProvider = (url) => {
    if (
      url?.includes("youtube.com") ||
      url?.includes("youtu.be") ||
      url?.includes("youtube")
    ) {
      return "youtube";
    } else if (
      url?.includes("vimeo.com") ||
      url?.includes("player.vimeo.com") ||
      url?.includes("vimeo")
    ) {
      return "vimeo";
    } else {
      return "video";
    }
  };


  /* -------------------------------------------------------------------------- */
  /*                          video and document viewer                         */
  /* -------------------------------------------------------------------------- */
  const handleLesson = useMemo(() => {
    const videoUrl = programDetail?.video?.[0];
    if (!videoUrl) {
      return (
        <img
          src={programDetail?.images?.[3]}
          alt=""
          className="w-full h-full object-cover"
        />
      );
    }
    else {
      const provider = getProvider(videoUrl ? 'https://www.youtube.com/watch?v=o5xOmNabezQ' : "");
      return (
        <VideoPlayer
          source={{
            type: provider,
            src: videoUrl ? 'https://www.youtube.com/watch?v=o5xOmNabezQ' : "",
          }}
        />
      );
    }
  }, [programDetail]);

  return (
    <>
      <div className="programDetailsBannerBG tracking-wide">
        <div className="flex flex-col gap-[34px] py-[34px] px-[148px]">
          <div className="grid grid-cols-[1fr_auto]">
            <div className="grid grid-cols-[auto_1fr] gap-[30px]">
              <figure className="w-[59px] h-[59px] rounded-full">
                <img
                  src="/logo/favicon.svg"
                  alt=""
                  className="w-full h-full cover"
                />
              </figure>
              <div className="capitalize flex flex-col gap-[12px]">
                <h1 className="text-[40px] leading-[50px] font-semibold">
                  {programDetail?.program_name || 'program title'}
                </h1>
                <div className="text-gray-600 flex flex-col gap-1">
                  <div className="flex gap-[13px] items-center text-base font-medium ">
                    <p className="text-yellow-500 flex items-center gap-1">
                      <span>{programDetail?.rating || 'no rating'}</span>
                      <Star className="w-4" />
                    </p>
                    <p className="flex items-center gap-1">
                      &#x2772;<span>{programDetail?.ratingCount || '123456'}</span>
                      <span>rating</span>&#x2773;
                    </p>
                    {/* <p className="flex items-center gap-1">
                      <span>{programDetail?.studentsCount || '123456'}</span>
                      <span>students</span>
                    </p> */}
                  </div>
                  <div className="flex gap-[34px] items-center text-base font-medium ">
                    <p className="flex items-center gap-1">
                      <MapPin className="w-4" />
                      <span>{programDetail?.city_name ? (programDetail?.city_name + ' ,' + programDetail?.country_name) : programDetail?.country_name}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <CalendarDays className="w-4" />
                      <span>duration&nbsp;&#x3a;&nbsp;{programDetail?.total_duration || "3 months"}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <UsersRound className="w-4" />
                      <span>Enrolled&nbsp;&#x3a;&nbsp;{programDetail?.enrolled || "54,548"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpenToApply(!isOpenToApply)}
              className={`primary h-[48px] px-[38px]  text-[20px] font-semibold text-white rounded-full hover:scale-105 primary-hover transition duration-300 cursor-pointer`}
            >
              Enroll Now
            </button>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] gap-x-[16px]">
            <div className="w-[733px] row-span-1 h-[400px] border relative group">
              <img
                src={programDetail?.images?.[0]}
                alt=""
                className="w-full h-full object-cover"
              />
              <span
                onClick={handleImageOpen}
                className="absolute bottom-2 right-2 transform transition-transform duration-300 group-hover:scale-115 bg-gray-300 h-[41px] w-[41px] flex items-center justify-center rounded-full text-base font-semibold hover:bg-white cursor-pointer"
              >
                +{imgListLength-1}
              </span>
            </div>
            <div className="row-span-2 w-[364px] flex flex-col gap-y-[16px]">
              <div className="h-[192px] hover:scale-105 transition duration-500 border">
                <img
                  src={programDetail?.images?.[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[192px] hover:scale-105 transition duration-500 border">
                <img
                  src={programDetail?.images?.[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="row-span-1 w-[487px] h-[400px] hover:scale-105 transition duration-500 border">
              {/* <video
                src='https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_200kbps_360p_60.0fps_h264.mp4'
                controls
                autoPlay
                muted
                loop   // optional: makes it replay continuously
                className="w-full h-full object-cover"
              /> */}
              {handleLesson}
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Apply button popup----------------------------- */}
      {isOpenToApply && <ApplyToProgram setIsOpenToApply={setIsOpenToApply} isOpenToApply={isOpenToApply} programDetail={programDetail} setAlert={setAlert} />}

      <ImageLightbox
        slides={slides}
        open={open}
        onClose={() => setOpen(false)}
        index={currentIndex}
      />
    </>
  );
}
