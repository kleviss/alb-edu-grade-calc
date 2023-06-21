import { useState } from "react";
import Popover from "@/components/shared/popover";
import { ChevronDown } from "lucide-react";

export default function GradesPopover({ selectedGrade, setSelectedGrade }: {
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
}) {
  const [openPopover, setOpenPopover] = useState(false);

  const grades = [
    "Klasa 1",
    "Klasa 2",
    "Klasa 3",
    "Klasa 4",
    "Klasa 5",
    "Klasa 6",
    "Klasa 7",
    "Klasa 8",
    "Klasa 9"
  ];

  const handleGradeSelection = (grade: string) => {
    setSelectedGrade(grade);
    setOpenPopover(false);
  };

  return (
    <Popover
      content={
        <div className="w-full rounded-md bg-white p-2 sm:w-40">
          {grades.map((grade) => (
            <button
              key={grade}
              className={`flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 ${selectedGrade === grade ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
              onClick={() => handleGradeSelection(grade)}
            >
              {grade}
            </button>
          ))}
        </div>
      }
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className={`flex w-40 h-10 items-center justify-between rounded-md border border-gray-300 px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none ${selectedGrade ? "bg-gray-100" : ""
          }`}
      >
        <p className={`text-gray-600 ${selectedGrade ? "font-semibold" : ""}`}>
          {selectedGrade || "Zgjidh klasën"}
        </p>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-all ${openPopover ? "rotate-180" : ""
            }`}
        />
      </button>
    </Popover>
  );
}
