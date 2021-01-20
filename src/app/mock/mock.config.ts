import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export default {
    GET: {
        'https://frontend-quiz.com/api/quiz/all': {
            handler: getQuizList
        },
        'https://frontend-quiz.com/api/quiz-questions/all/1': {
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
        status: 200, body: [
            {
                id: 1,
                name: 'HTML5 Quiz',
                description: ''
            },
            {
                id: 2,
                name: 'CSS Quiz',
                description: ''
            },
            {
                id: 3,
                name: 'JavaScript Quiz',
                description: ''
            }
        ]
    }))
}

function getQuizQuestions() {
    return of(new HttpResponse({
        status: 200, body: {
            name: 'HTML5 Quiz',
            description: '',
            questions: [
                {
                    id: 1,
                    question: 'qn1',
                    options: 'op1,op2,op3,op4',
                    quizId: 1,
                    points: 1
                },
                {
                    id: 2,
                    question: 'qn2',
                    options: 'op1,op2,op3,op4',
                    quizId: 1,
                    points: 1
                },
                {
                    id: 3,
                    question: 'qn3',
                    options: 'op1,op2,op3,op4',
                    quizId: 1,
                    points: 1
                },
                {
                    id: 4,
                    question: 'qn4',
                    options: 'op1,op2,op3,op4',
                    quizId: 1,
                    points: 1
                }
            ]
        }
    }))
}

function saveAnswers() {
    return of(new HttpResponse({
        status: 200, body: {
            questions: [
                {
                    qnId: 1,
                    submittedOption: '',
                    correctOption: ''
                }, {
                    qnId: 2,
                    submittedOption: '',
                    correctOption: ''
                }
            ],
            score: 0
        }
    }))
}
