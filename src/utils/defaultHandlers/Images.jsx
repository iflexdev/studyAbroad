import React from "react";
import { ImageOff } from "lucide-react";
import { AllImages } from "../defaults/All_Images_Logo";

export default function Images({ name, alt="", className="w-6 h-6" }) {
  const src = AllImages[name];
  if (!src)
    return (
      <span className="text-red-500">
        <ImageOff />
      </span>
    );
  return (
    <>
      <img src={`/images/${src}`} alt={alt || name} className={className} />
    </>
  );
}
