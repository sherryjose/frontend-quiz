import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { mockData } from './mock.constants';

export default {
    GET: {
        'https://frontend-quiz.com/api/quiz/all': {
            handler: getQuizList
        },
        'https://frontend-quiz.com/api/quiz-questions/all': {
            handler: getQuizQuestions
        }
    },
    POST: {
        'https://frontend-quiz.com/api/user/quiz-score': {
            handler: saveAnswers
        }
    }
}

function getQuizList() {
    return of(new HttpResponse({
        status: 200, body: mockData.quizList
    }));
}

function getQuizQuestions(quizId) {
    return of(new HttpResponse({
        status: 200, body: {
            name: mockData.quizList.find(item => item.id === +quizId).name,
            description: mockData.quizList.find(item => item.id === +quizId).description,
            questions: mockData.quizQuestions.filter(item => item.quizId === +quizId)
                .map(({ id, question, options }) => ({ id, question, options }))
        }
    }));
}

function saveAnswers(body) {
    return of(new HttpResponse({
        status: 200, body: {
            questions: mockData.quizQuestions.filter(item => item.quizId === body.quizId).map(qn => ({
                qnId: qn.id,
                submittedOption: body.mappings.find(item => item.qnId === qn.id)?.submittedOption || '',
                correctOption: qn.correctOption
            })),
            score: mockData.quizQuestions.filter(qn => body.mappings.map(item => item.qnId).includes(qn.id)).filter(qn => qn.correctOption === body.mappings.find(item => item.qnId === qn.id).submittedOption).map(item => item.points).reduce((prev, curr) => prev + curr, 0),
            totalPoints: mockData.quizQuestions.filter(item => item.quizId === body.quizId).map(item => item.points).reduce((prev, curr) => prev + curr, 0)
        }
    }));
}
