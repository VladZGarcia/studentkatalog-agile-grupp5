import { studenter } from "./utils/studentModel.js";
import { visaStudenter } from "./pages/studentDisplay.js";
import { updateAge } from "./utils/StudentAge.js";

// Kör när DOM är laddad
document.addEventListener("DOMContentLoaded", () => {
  console.log("Studentkatalog laddad");
  visaStudenter(studenter); // Visa studentlistan
  updateAge();
});
