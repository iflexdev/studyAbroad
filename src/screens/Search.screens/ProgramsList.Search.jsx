import React from "react";
import { X } from "lucide-react";
import ProgramCard from "./programCard.Search";

export default function programList() {
  return (
    <>
      <div className="space-y-4">
        <div className="h-12 flex justify-between items-center">
          <div className="rounded-full bg-gray-200 text-gray-500 border px-3 py-1 flex justify-between items-center gap-2">
            <p className="text-sm ">filter search</p>
            <X  className="w-3"/>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="">Short By:</label>
            <select className="h-12 w-[191px] px-1 rounded bg-gray-50 border">
              <option value="">Newly published</option>
            </select>
          </div>
        </div>
        <div className="">
            <p className="text-xs text-gray-400"><span className="font-bold">XXXXXXX</span> numbers of results</p>
        </div>
      </div>
      <div className="py-3">
        <ProgramCard/>
      </div>
    </>
  );
}
