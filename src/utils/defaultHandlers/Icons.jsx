import React from "react";
import { ImageOff } from "lucide-react";
import { SvgIcons } from "../defaults/All_Images_Logo";

export default function Icons({ name, alt="", className="w-6 h-6" }) {
  const src = SvgIcons[name];
  if (!src)
    return (
      <span className="text-red-500">
        <ImageOff />
      </span>
    );
  return (
    <>
      <img src={`/icons/${src}`} alt={alt || name} className={className} />
    </>
  );
}
