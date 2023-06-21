"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import GradesPopover from "@/components/home/grades-popover";
import curriculumData from "@/lib/grades";

interface Grades {
  [key: string]: number;
}

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [selectedGrade, setSelectedGrade] = useState("Klasa 3");
  const selectedGradeData = curriculumData.grades.find(
    (grade) => grade.grade === Number(selectedGrade.replace("Klasa ", ""))
  );

  const [grades, setGrades] = useState<Grades>({});
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleInputChange = (subjectName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = Number(inputValue);

    if (isNaN(numericValue)) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [subjectName]: "Një ose më shumë nga vlerat e futura nuk është numer.",
      }));
    } else if (numericValue < 1 || numericValue > 5) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [subjectName]: "Vendosni një notë mes 1 dhe 5",
      }));
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [subjectName]: "",
      }));

      setGrades((prevGrades) => ({
        ...prevGrades,
        [subjectName]: numericValue,
      }));
    }
  };

  const calculateTotalGrade = () => {
    if (!selectedGradeData) {
      return 0; // Return default value if selectedGradeData is undefined
    }

    let totalGrade = 0;
    let totalWeeklyHours = 0;

    selectedGradeData.categories.forEach((category) => {
      category.subjects.forEach((subject) => {
        const grade = grades[subject.name];

        if (typeof grade === "number") {
          const weeklyHours: number = subject.weekly_hours;

          totalGrade += grade * weeklyHours;
          totalWeeklyHours += weeklyHours;
        }
      });
    });

    if (totalWeeklyHours > 0) {
      return totalGrade / totalWeeklyHours;
    } else {
      return 0; // Avoid division by zero error if no subjects are present
    }
  };

  useEffect(() => {
    setInputErrors({});
  }, [selectedGrade]);

  useEffect(() => {
    inputRefs.current = {};
  }, []);

  const clearFields = () => {
    setGrades({});
    setInputErrors({});
    Object.values(inputRefs.current).forEach((input) => {
      if (input) {
        input.value = "";
      }
    });
  };

  return (
    <div className="py-6 relative col-span-1 min-h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Balancer>

          <div className="flex justify-center items-center h-12">
            <GradesPopover
              selectedGrade={selectedGrade}
              setSelectedGrade={setSelectedGrade}
            />
          </div>

          {selectedGradeData && (
            <div>
              <h3 className="font-bold text-lg">Kurrikula {selectedGrade}:</h3>
              <p className="text-xs text-gray-500 pb-6">
                Verifiko orët javore dhe plotëso notën mesatare për secilën lëndë.
              </p>
              <div className="mt-2 mx-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr className="grid grid-cols-8">
                      <th className="py-3 px-6 text-left font-medium col-span-4">Lëndët</th>
                      <th className="py-3 px-6 text-left font-medium col-span-1">Orët </th>
                      <th className="py-3 px-6 text-left font-medium col-span-3">Nota </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedGradeData.categories.map((category) => (
                      <tr key={category.name} className="grid grid-cols-8">
                        <td className="px-6 text-left col-span-4">
                          <div className="list-none list-disc list-inside">
                            {category.subjects.map((subject) => (
                              <p key={subject.name} className="no-wrap">{subject.name}</p>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 text-left col-span-1">
                          <div className="list-none">
                            {category.subjects.map((subject) => (
                              <p key={subject.name}>{subject.weekly_hours}</p>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 text-left col-span-3">
                          <div className="list-none mt-3">
                            {category.subjects.map((subject) => (
                              <input
                                key={subject.name}
                                type="text"
                                className="block w-full px-2 py-0 mt-1 mb-1 border border-gray-300 rounded-md"
                                placeholder=""
                                onChange={(e) => handleInputChange(subject.name, e)}
                                ref={(input) => {
                                  inputRefs.current[subject.name] = input;
                                }}
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-bold text-lg">Mesatarja: {calculateTotalGrade().toFixed(2)}</h3>
              <p className="text-xs text-red-500 pb-6">
                {Object.values(inputErrors)
                  .filter((error) => error !== "")
                  .map((error, index) => (
                    <span key={index}>
                      {error}
                      <br />
                    </span>
                  ))}
              </p>

              <div className="flex justify-center">
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black" onClick={clearFields}
                >
                  Pastro fushat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

