import { Student, studenter } from "./utils/studentModel.js";
import { visaStudenter } from "./pages/studentDisplay.js";
import { updateAge } from "./utils/StudentAge.js";

// Kör när DOM är laddad

const localStorageStudentList: Student[] = JSON.parse(localStorage.getItem("studentList") || "[]");

if (localStorageStudentList.length === 0) {
  localStorage.setItem("studentList", JSON.stringify(studenter));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Studentkatalog laddad");
  const currentStudentList = JSON.parse(localStorage.getItem("studentList") || "[]");
  visaStudenter(currentStudentList); // Visa den aktuella studentlistan
  updateAge();
});
