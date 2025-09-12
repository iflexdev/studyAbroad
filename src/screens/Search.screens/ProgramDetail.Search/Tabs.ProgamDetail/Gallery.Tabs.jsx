import React, { useMemo, useState } from "react";
import ImageLightbox from "../../../../utils/defaultHandlers/ImageViewer";
import VideoPlayer from "../../../../utils/defaults/videoPlayer.VideoDoc";

export default function Gallery({ gallery }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = gallery?.images?.map((url) => ({ src: url }));

  const handleImageOpen = (index) => {
    setCurrentIndex(index);
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
  const handleLesson = (index) => {
    const videoUrl = gallery?.videos?.[index];
    if (!videoUrl) {
      return (
        <img
          src={gallery?.images?.[3]}
          alt=""
          className="w-full h-full object-cover"
        />
      );
    }
    else {
      const provider = getProvider(videoUrl ? videoUrl : "");
      return (
        <VideoPlayer
          source={{
            type: provider,
            src: videoUrl ? videoUrl : "",
          }}
        />
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-[30px] max-h-[111vh] overflow-auto no-scrollbar">
        {(gallery?.images || []).map((url, index) => (
          <div
            key={index}
            onClick={() => handleImageOpen(index)}
            className="h-[227px] w-[332px] rounded-[12px] cursor-pointer overflow-hidden border"
          >
            <img
              src={url || "https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000"}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}

        {(gallery?.videos || []).map((_, index) => (
          <div
            key={index}
            className="h-[227px] w-[332px] rounded-[12px] cursor-pointer overflow-hidden border"
          >
            {handleLesson(index)}
          </div>
        ))}
      </div>
      <ImageLightbox
        slides={slides}
        open={open}
        onClose={() => setOpen(false)}
        index={currentIndex}
      />
    </>
  );
}
