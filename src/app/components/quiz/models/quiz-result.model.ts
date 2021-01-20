export interface QuizResult {
    score: number;
    totalPoints: number;
    questions: Questions[];
}

interface Questions {
    qnId: number;
    submittedOption: string;
    correctOption: string;
}
