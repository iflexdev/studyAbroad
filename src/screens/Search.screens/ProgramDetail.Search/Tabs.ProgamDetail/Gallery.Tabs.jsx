import React from "react";

export default function Gallery({images}) {
  return (
    <>
      <div className="flex flex-wrap gap-[30px] ">
        {(images || []).map((item, index) => (
          <div
            key={index}
            className="h-[227px] w-[332px] rounded-[12px] cursor-pointer overflow-hidden hover:scale-105 transition duration-500 border"
          >
            <img
              src={item || "https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000"}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
