"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import GradesPopover from "@/components/home/grades-popover";
import curriculumData from "@/lib/grades";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [selectedGrade, setSelectedGrade] = useState("Klasa 9");
  const selectedGradeData = curriculumData.grades.find(
    (grade) => grade.grade === Number(selectedGrade.replace("Klasa ", ""))
  );

  const [grades, setGrades] = useState({});

  const handleGradeChange = (subjectName: string, grade: string) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [subjectName]: Number(grade),
    }));
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

        if (typeof grade === 'number') {
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


  return (
    <div className={"py-6 relative col-span-1 min-h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"}>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Balancer>

          {/* Container for GradesPopover */}
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
                      <th className="py-3 px-6 text-left font-medium col-span-2">Kategoria</th>
                      <th className="py-3 px-6 text-left font-medium col-span-3">Lëndët</th>
                      <th className="py-3 px-6 text-left font-medium col-span-1">Orët javore</th>
                      <th className="py-3 px-6 text-left font-medium col-span-2">Nota mesatare</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedGradeData.categories.map((category) => (
                      <tr key={category.name} className="grid grid-cols-8">
                        <td className="py-4 px-6 text-left col-span-2 text-gray-500 font-medium">{category.name}</td>
                        <td className="px-6 text-left col-span-3">
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
                        <td className="px-6 text-left col-span-2">
                          <div className="list-none">
                            {category.subjects.map((subject) => (
                              <input
                                key={subject.name}
                                type="text"
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md"
                                placeholder=""
                                onChange={(e) =>
                                  handleGradeChange(subject.name, e.target.value)
                                }
                              />

                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-bold text-lg">  Mesatarja: {calculateTotalGrade().toFixed(2)}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
