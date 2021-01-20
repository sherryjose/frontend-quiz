export interface QuizResult {
    score: number;
    questions: Questions[];
}

interface Questions {
    qnId: number;
    submittedOption: string;
    correctOption: string;
}
