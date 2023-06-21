export interface Subject {
  name: string;
  weekly_hours: number;
}

export interface Category {
  name: string;
  total_weekly_hours: number;
  subjects: Subject[];
}

export interface Grade {
  grade: number;
  categories: Category[];
}

export interface CurriculumData {
  academic_year: string;
  grades: Grade[];
}

const curriculumData: CurriculumData = {
  academic_year: "2022-2023",
  grades: [
    {
      grade: 1,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 10,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 8,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 2,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        {
          name: "SHKENCAT E NATYRËS",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Dituri natyre",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "SHOQËRIA DHE MJEDISI",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Edukim per shoqërine",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "ARTE",
          total_weekly_hours: 2,
          subjects: [
            {
              name: "Muzikë",
              weekly_hours: 1,
            },
            {
              name: "Art pamor",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "EDUKIMI FIZIK, SPORTI DHE SHENDETI",
          total_weekly_hours: 3,
          subjects: [],
        },
        {
          name: "TEKNOLOGJI DHE TIK",
          total_weekly_hours: 0,
          subjects: [
            {
              name: "TIK",
              weekly_hours: 0,
            },
          ],
        },
        {
          name: "KURRIKULA ME ZGJEDHJE",
          total_weekly_hours: 1,
          subjects: [],
        },
      ],
    },
    {
      grade: 2,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 10,
          subjects: [
            {
              name: "Gjuhe shqipe kl2",
              weekly_hours: 8,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 2,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        {
          name: "SHKENCAT E NATYRËS",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Dituri natyre",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "SHOQËRIA DHE MJEDISI",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Edukim per shoqërine",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "ARTE",
          total_weekly_hours: 2,
          subjects: [
            {
              name: "Muzikë",
              weekly_hours: 1,
            },
            {
              name: "Art pamor",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "EDUKIMI FIZIK, SPORTI DHE SHENDETI",
          total_weekly_hours: 3,
          subjects: [],
        },
        {
          name: "TEKNOLOGJI DHE TIK",
          total_weekly_hours: 0,
          subjects: [
            {
              name: "TIK",
              weekly_hours: 0,
            },
          ],
        },
        {
          name: "KURRIKULA ME ZGJEDHJE",
          total_weekly_hours: 1,
          subjects: [],
        },
      ],
    },
    {
      grade: 3,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 9,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 6,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        {
          name: "SHKENCAT E NATYRËS",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Dituri natyre",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "SHOQËRIA DHE MJEDISI",
          total_weekly_hours: 1,
          subjects: [
            {
              name: "Qytetari",
              weekly_hours: 1,
            },
          ],
        },
        {
          name: "ARTE",
          total_weekly_hours: 3,
          subjects: [
            {
              name: "Muzikë",
              weekly_hours: 1,
            },
            {
              name: "Art pamor",
              weekly_hours: 1,
            },
            {
              name: "Kërcim",
              weekly_hours: 1,
            },
           
          ],
        },
        {
          name: "EDUKIMI FIZIK, SPORTI DHE SHENDETI",
          total_weekly_hours: 3,
          subjects: [
            {
              name: "Edukim fizik",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "TEKNOLOGJI DHE TIK",
          total_weekly_hours: 0,
          subjects: [
            {
              name: "TIK",
              weekly_hours: 0,
            },
          ],
        },
        {
          name: "AFTËSIMI TEKNOLOGJIK PRAKTIK",
          total_weekly_hours: 0,
          subjects: [
            {
              name: "Aftesimi teknologjik praktik",
              weekly_hours: 0,
            },
          ],
        },
        {
          name: "KURRIKULA ME ZGJEDHJE",
          total_weekly_hours: 0,
          subjects: [
            {
              name: "Lëndë me zgjedhje",
              weekly_hours: 0,
            },
          ],
        },
      ],
    },
    {
      grade: 4,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 4
      ],
    },
    {
      grade: 5,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipeeeeee",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 5
      ],
    },
    {
      grade: 6,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 6
      ],
    },
    {
      grade: 7,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 7
      ],
    },
    {
      grade: 8,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 8
      ],
    },
    {
      grade: 9,
      categories: [
        {
          name: "GJUHET DHE KOMUNIKIMI",
          total_weekly_hours: 8,
          subjects: [
            {
              name: "Gjuhe shqipe",
              weekly_hours: 5,
            },
            {
              name: "Gjuhe e huaj e pare",
              weekly_hours: 3,
            },
          ],
        },
        {
          name: "MATEMATIKË",
          total_weekly_hours: 4,
          subjects: [
            {
              name: "Matematikë",
              weekly_hours: 4,
            },
          ],
        },
        // ... other categories for grade 9
      ],
    },
  ],
};

export default curriculumData;
