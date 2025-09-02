import React, { useState } from "react";
import ImageLightbox from "../../../../utils/defaultHandlers/ImageViewer";

const imageUrls = Array.from({ length: 10 }).map(
  () => "https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000"
);

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = imageUrls.map((url) => ({ src: url }));

  const handleImageOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  return (
    <>
      <div className="flex flex-wrap gap-[30px] ">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            onClick={() => handleImageOpen(index)}
            className="h-[227px] w-[332px] rounded-[12px] cursor-pointer overflow-hidden hover:scale-105 transition duration-500 border"
          >
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
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
