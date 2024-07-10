"use client"
import { useState } from "react";
import { FaPlay, FaBook, FaTree, FaSitemap, FaTools } from "react-icons/fa";

const TabContent = ({ title, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none text-left bg-white hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-3xl text-[#BCB7BD] mr-4">{isOpen ? "-" : "+"}</span>
          <span className="text-[#615A63] text-[16px] font-medium">{title}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#615A63] text-[16px] font-medium mr-1">{sections.length} Sections</span>
          <span className="text-[#615A63] text-[16px] font-medium">. {sections.reduce((acc, section) => acc + parseInt(section.duration), 0)} minutes</span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-[#E0E0E0] space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                {index === 0 && <FaPlay className="mr-2 text-blue-500" />}
                {index === 1 && <FaBook className="mr-2 text-gray-600" />}
                {index === 2 && <FaTree className="mr-2 text-gray-600" />}
                {index === 3 && <FaSitemap className="mr-2 text-gray-600" />}
                {index === 4 && <FaTools className="mr-2 text-gray-600" />}
                <span className="mr-2 text-[14px]">{section.title}</span>
                {section.demo && <a href={section.demo} className="text-blue-500 ml-1">Watch Demo</a>}
              </div>
              {section.duration && <span className="text-gray-600">{section.duration}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ExpandableTabs = () => {
  const tabData = [
    {
      title: "Course Overview",
      sections: [
        { title: "2 Sections", duration: "15 minutes" },
      ],
    },
    {
      title: "Definition: Planning for Success",
      sections: [
        { title: "2 Sections", duration: "30 minutes" },
      ],
    },
    {
      title: "Definition: Planning for Success Part 02",
      sections: [
        { title: "4 Sections", duration: "84 minutes" },
      ],
    },
    {
      title: "Information Architecture: Creating a Solid Foundation",
      sections: [
        { title: "6 Sections", duration: "120 minutes" },
      ],
    },
    {
      title: "Information Architecture: Creating a Solid Foundation Part 02",
      sections: [
        { title: "Exercise: Turning Information Priority into an IA Model", duration: "6 minutes", demo: "#" },
        { title: "IA Models: Which One’s Right for My Site?", duration: "8 minutes" },
        { title: "Hierarchical Tree IA Model", duration: "15 minutes" },
        { title: "Combining IA Models", duration: "20 minutes" },
        { title: "Tools for Creating IA Models", duration: "40 minutes" },
      ],
    },
    {
      title: "Information Architecture: Creating a Solid Foundation Part 03",
      sections: [],
    },
  ];

  return (
    <div className="w-full">
      {tabData.map((tab, index) => (
        <TabContent key={index} title={tab.title} sections={tab.sections} />
      ))}
    </div>
  );
};

export default function MyApp() {
  return (
    <div className="w-full">
      <ExpandableTabs />
    </div>
  );
}
