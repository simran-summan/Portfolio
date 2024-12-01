// import Image from "next/image";
import React from "react";
import { Timeline } from "../Components/ui/Timeline";

export function Education() {
  const data = [
    {
      title: "2022– 2025",
      content: (
        <div>
          <p
            className="text-neutral-400 dark:text-neutral-200 text-2xl md:text-3xl font-medium mb-8">
            Meghnad Saha Institute of Technology
          </p>
          <p
            className="dark:text-neutral-200 text-lg md:text-xl font-medium mb-8 text-[#453e9a]">
            Bachelor of Computer Applications
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p
            className="text-neutral-400 dark:text-neutral-200 text-2xl md:text-3xl font-medium mb-8">
            The Bhawanipur Gujarati Education Society School (ISC)
          </p>
          <p
            className="text-[#453e9a] dark:text-neutral-200 text-lg md:text-xl font-medium mb-8">
            Higher Secondary Certificate (12th Standard)
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p
            className="text-neutral-400 dark:text-neutral-200 text-2xl md:text-3xl font-medium mb-8">
             The Bhawanipur Gujarati Education Society School
          </p>
          <p
            className="text-[#453e9a] dark:text-neutral-200 text-lg md:text-xl font-medium mb-8">
            Secondary School Certificate (10th Standard)
          </p>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full" id="education">
      <Timeline data={data} />
    </div>)
  );
}
