// Huvudfil för studentkatalog applikation

// Interface för student
interface Student {
    id: number;
    namn: string;
    email: string;
    kurs: string;
}

// Exempel på studenter
const studenter: Student[] = [
    {
        id: 1,
        namn: "Anna Andersson",
        email: "anna.andersson@example.com",
        kurs: "Webbutveckling"
    },
    {
        id: 2,
        namn: "Erik Eriksson",
        email: "erik.eriksson@example.com",
        kurs: "Frontend"
    }
];

// Funktion för att visa studenter
function visaStudenter(): void {
    const studentListElement = document.getElementById('student-list');
    
    if (!studentListElement) {
        console.error('Kunde inte hitta student-list elementet');
        return;
    }

    // Rensa befintligt innehåll
    studentListElement.innerHTML = '';

    // Skapa lista med studenter
    studenter.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student-card';
        studentDiv.innerHTML = `
            <h3>${student.namn}</h3>
            <p>Email: ${student.email}</p>
            <p>Kurs: ${student.kurs}</p>
        `;
        studentListElement.appendChild(studentDiv);
    });
}

// Kör när DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    console.log('Studentkatalog laddad');
    visaStudenter();
});
