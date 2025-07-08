// const FilterSidebar = () => {
//   const filters = [
//     {
//       title: "COUNTRY",
//       options: ["India", "USA", "UK", "UAE", "Germany", "Canada"],
//     },
//     {
//       title: "PROGRAM",
//       options: ["Bachelor of Science", "MBA", "React", "IELTS", "Master of Management", "Business Management", "Computer Science", "Associate of Arts"],
//     },
//     {
//       title: "UNIVERSITY",
//       options: ["Prince Edward Island", "SAIT", "UOFT", "Alexander College Vancouver"],
//     },
//     {
//       title: "COURSE LEVEL",
//       options: ["All Level", "Beginner", "Intermediate", "Expert"],
//     },
//   ];

//   return (
//     <aside className="w-64 p-4 border-r border-gray-300">
//       <input
//         type="text"
//         placeholder="Search"
//         className="w-full mb-4 px-3 py-2 border rounded"
//       />
//       {filters.map((filter) => (
//         <div key={filter.title} className="mb-6">
//           <h3 className="font-semibold text-sm mb-2">{filter.title}</h3>
//           {filter.options.map((option) => (
//             <div key={option} className="mb-1">
//               <label className="flex items-center space-x-2 text-sm">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span>{option}</span>
//               </label>
//             </div>
//           ))}
//         </div>
//       ))}
//     </aside>
//   );
// };
// export default FilterSidebar;


import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FilterSidebar = () => {
  const [selectedCountries, setSelectedCountries] = useState(["UAE"]);
  const [showOptions, setShowOptions] = useState(true); // toggle state

  const countryOptions = [
    { name: "India", count: 1345 },
    { name: "USA", count: 12736 },
    { name: "UK", count: 1345 },
    { name: "UAE", count: 1345 },
    { name: "Germany", count: 1345 },
    { name: "Canada", count: 1345 },
  ];

  const toggleCountry = (name) => {
    setSelectedCountries((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <aside className="w-64 border rounded-md h-fit overflow-hidden font-sans">
      {/* COUNTRY header */}
      <div
        className="bg-[#eef3fe] px-4 py-3 flex justify-between items-center border-b cursor-pointer"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <h3 className="font-semibold text-sm text-gray-800">COUNTRY</h3>
        {showOptions ? (
          <ChevronUp size={18} className="text-gray-500" />
        ) : (
          <ChevronDown size={18} className="text-gray-500" />
        )}
      </div>

      {/* Country Options (collapsible) */}
      {showOptions && (
        <div className="p-3 space-y-2">
          {countryOptions.map((option) => {
            const isSelected = selectedCountries.includes(option.name);
            return (
              <label
                key={option.name}
                className="flex justify-between items-center text-sm cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCountry(option.name)}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span
                    className={
                      isSelected ? "text-blue-600 font-medium" : "text-gray-800"
                    }
                  >
                    {option.name}
                  </span>
                </div>
                <span className="text-gray-500 text-xs">
                  {option.count.toLocaleString()}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;

