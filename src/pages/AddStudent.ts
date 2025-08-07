import { StudentWithAge } from "../utils/StudentAge.js";
import { showToast } from "../utils/interactions/userInteractions.js";
import { Student } from "../utils/studentModel.js";

let studentList: Student[] = [];
const storedList = localStorage.getItem("studentList");
if (storedList) {
  studentList = JSON.parse(storedList);
}

const addStudentForm = document.querySelector<HTMLFormElement>(
  "form"
) as HTMLFormElement;
const studentIDInput = document.getElementById("studentId") as HTMLInputElement;
const studentNameInput = document.getElementById("name") as HTMLInputElement;
const studentEmailInput = document.getElementById("email") as HTMLInputElement;
const studentAgeInput = document.getElementById("age") as HTMLInputElement;
const studentClassInput = document.getElementById("class") as HTMLInputElement;
const studentIsActiveInput = document.getElementById(
  "isActive"
) as HTMLInputElement;

function handleAddStudent(event: Event): void {
  event.preventDefault();

  const newStudent: StudentWithAge = {
    id: studentIDInput.value
      ? parseInt(studentIDInput.value)
      : studentList.length + 1,
    namn: studentNameInput.value.trim(),
    email: studentEmailInput.value.trim(),
    kurs: studentClassInput.value.trim(),
    age: studentAgeInput.value ? parseInt(studentAgeInput.value) : undefined,
    isActive: studentIsActiveInput.checked  
  };

  studentList.unshift(newStudent);
  localStorage.setItem("studentList", JSON.stringify(studentList));

  showToast("Student added successfully!");

  // Clear form fields
  addStudentForm.reset();

  // Optionally, redirect or update the UI to show the new student
  window.location.href = "../index.html";
}
addStudentForm.addEventListener("submit", handleAddStudent);
