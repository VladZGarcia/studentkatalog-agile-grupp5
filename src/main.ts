import { studenter } from './utils/studentModel.js';
import { visaStudenter } from './pages/studentDisplay.js';

// Kör när DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    visaStudenter(studenter); // Visa studentlistan
});