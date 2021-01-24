export interface QuizQuestions {
    name: string;
    description: string;
    questions: Questions[];
    time: number;
}

interface Questions {
    id: number;
    question: string;
    options: string;
}
