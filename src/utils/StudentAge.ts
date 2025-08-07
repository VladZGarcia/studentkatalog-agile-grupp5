import { Student, studenter } from "./studentModel.js";

export interface StudentWithAge extends Student {
  age: number | undefined;
}

function addAge(students: Student[]): StudentWithAge[] {
  const minAge = 25;
  const maxAge = 65;

  return students.map((student) => {
    const studentWithAge = {
      ...student,
      age: Math.floor(Math.random() * (maxAge - minAge) + minAge),
    };
    return studentWithAge;
  });
}

function displayAge(students: StudentWithAge[]) {
  const studentListElement = document.getElementById("student-list");
  if (!studentListElement) {
    return;
  }

  const studentNames = Array.from(
    studentListElement.getElementsByTagName("h3")
  );

  for (let i = 0; i < studentNames.length; i++) {
    studentNames[i].textContent = `${students[i].namn}, ${students[i].age}`;
  }
}

export function updateAge() {
  const studenterWithAge = addAge(studenter);
  displayAge(studenterWithAge);
}
