import React from "react";
import { ImageOff } from "lucide-react";
import { LogosFavicons } from "../defaults/All_Images_Logo";

export default function Logo({ name, alt="", className="w-6 h-6" }) {
  const src = LogosFavicons[name];
  console.log("logo: ",src);
  if (!src)
    return (
      <span className="text-red-500">
        <ImageOff />
      </span>
    );
  return (
    <>
      <img src={`/images/logo/${src}`} alt={alt || name} className={className} />
    </>
  );
}
