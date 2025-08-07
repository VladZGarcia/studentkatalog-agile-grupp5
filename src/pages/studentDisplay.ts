import { Student } from '../utils/studentModel.js';


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

        // Lägg till aktiv/inaktiv klass baserat på isActive
        const statusClass = student.isActive ? 'active' : 'inactive';

        studentDiv.classList.add(statusClass);


        studentDiv.innerHTML = `
            <h3>${student.namn}</h3>
            <p>ID: ${student.id}</p>
            <p>Email: ${student.email}</p>
            <p>Kurs: ${student.kurs}</p>
            <p class="status">${student.isActive ? 'Aktiv' : 'Inaktiv'}</p>

        `;
        studentListElement.appendChild(studentDiv);
    });
}