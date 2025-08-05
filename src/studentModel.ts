// Interface för student
export interface Student {
    id: number;
    namn: string;
    email: string;
    kurs: string;
}

// Hårdkodade studenter (minst 3 enligt US1)
export const studenter: Student[] = [
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
    },
    {
        id: 3,
        namn: "Sofia Nilsson",
        email: "sofia.nilsson@example.com",
        kurs: "Backend"
    }
];