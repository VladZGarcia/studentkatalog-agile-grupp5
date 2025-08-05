import { studenter } from './studentModel';
import { visaStudenter } from './studentDisplay';

// Kör när DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    console.log('Studentkatalog laddad');
    visaStudenter(studenter); // Visa studentlistan
});