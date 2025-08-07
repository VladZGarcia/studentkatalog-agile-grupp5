import { Student } from '../utils/studentModel';

// Funktion för att visa studenters namn
export function visaStudenter(studenter: Student[]): void {
    const studentListElement = document.getElementById('student-list');

    if (!studentListElement) {
        console.error('Kunde inte hitta student-list elementet');
        return;
    }

    // Rensa befintligt innehåll
    studentListElement.innerHTML = '';

    // Skapa lista med studenters namn
    studenter.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student-card';
        studentDiv.innerHTML = `
            <h3>${student.namn}</h3>
        `;
        studentListElement.appendChild(studentDiv);
    });
}