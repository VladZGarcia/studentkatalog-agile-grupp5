import { studenter } from '../utils/studentModel';
import { visaStudenter } from '../utils/studentDisplay';

// Kör när DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    console.log('Studentkatalog laddad');
    visaStudenter(studenter); // Visa studentlistan
});