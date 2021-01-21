export interface QuizQuestions {
    name: string;
    description: string;
    questions: Questions[];
}

interface Questions {
    id: number;
    question: string;
    options: string;
}
