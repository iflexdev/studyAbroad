import React, { useState } from "react";
import Overview from "./Tabs.ProgamDetail/Overview.Tabs";
import Programs from "./Tabs.ProgamDetail/Programs.Tabs";
import Services from "./Tabs.ProgamDetail/Services.Tabs";
import Gallery from "./Tabs.ProgamDetail/Gallery.Tabs";
import Review from "./Tabs.ProgamDetail/Review.Tabs";

export default function TabSection({programDetail}) {
  const tabs = [
    "Overview",
    "Programs",
    "Study Abroad Services",
    "Gallery",
    "Review",
  ];
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <div className={`flex w-full`}>
        {tabs.map((tab) => (
          <>
            <div
              key={tab}
              className={`cursor-pointer flex w-full items-center justify-center tracking-wider transition duration-500
                ${
                  activeTab === tab
                    ? "primary text-white"
                    : "gray-200 text-black"
                }
                ${tab === tabs[0] && "rounded-l-full"}
                ${tab === tabs[tabs.length - 1] && "rounded-r-full"}`}
              onClick={() => setActiveTab(tab)}
            >
              <div
                className={`py-[13px]
                `}
              >
                {tab}
              </div>
            </div>
            {tab === tabs[tabs.length - 1] ? null : (
              <span className="border-r-2"></span>
            )}
          </>
        ))}
      </div>
      <div className="py-[35px]">
        {activeTab === "Overview" && <Overview programDetail={programDetail} />}
        {activeTab === "Programs" && <Programs />}
        {activeTab === "Study Abroad Services" && <Services />}
        {activeTab === "Gallery" && <Gallery images={programDetail?.images} />}
        {activeTab === "Review" && <Review Review={programDetail?.Review} />}
      </div>
    </>
  );
}
