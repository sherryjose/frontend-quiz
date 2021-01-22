export const mockData = {
    quizList: [
        {
            id: 1,
            name: 'HTML Quiz',
            description: 'The quiz tests your understanding of HTML and its usage'
        },
        {
            id: 2,
            name: 'CSS Quiz',
            description: 'The quiz tests your understanding of Cascading Style Sheets'
        },
        {
            id: 3,
            name: 'JavaScript Quiz',
            description: 'The quiz tests your understanding of basic to advanced JavaScript concepts'
        }
    ],
    quizQuestions: [
        {
            id: 1,
            question: 'Which of the following is not a semantic HTML5 element?',
            options: '<details>|<date>|<mark>|<time>',
            correctOption: '<date>',
            quizId: 1,
            points: 1
        },
        {
            id: 2,
            question: 'Which form tag attribute helps to bypass validation?',
            options: 'novalidate|formnovalidate|either novalidate or formnovalidate|None of the above',
            correctOption: 'novalidate',
            quizId: 1,
            points: 1
        },
        {
            id: 3,
            question: 'What does the below html code aid in?<br>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;',
            options: 'Search Engine Optimization|Responsive Web Design|Both of the above|None of the above',
            correctOption: 'Both of the above',
            quizId: 1,
            points: 1
        },
        {
            id: 4,
            question: 'Which of the following is not an HTML event?',
            options: 'onpopstate|onerror|onoffline|onhide',
            correctOption: 'onhide',
            quizId: 1,
            points: 1
        },
        {
            id: 5,
            question: 'Fill in the blanks such that img_large.jpg and img_medium.jpg get displayed for large and medium screen widths respectively.<br>&lt;picture&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;source media="(min-width:___)" srcset="img_large.jpg"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;source media="(min-width:___)" srcset="img_medium.jpg"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="img_small.jpg" alt="small image" style="width:auto;"&gt;<br>&lt;/picture&gt;',
            options: `768px, 992px|992px, 768px|Both of the above|None of the above`,
            correctOption: '992px, 768px',
            quizId: 1,
            points: 1
        },
        {
            id: 6,
            question: '&lt;input type="search" id="search" name="search" pattern="___"&gt;<br>Choose the regex to validate if the search input contains only numbers.',
            options: '\\D+|\\d+|\\w+|[^A-Za-z]+',
            correctOption: '\\d+',
            quizId: 1,
            points: 1
        },
        {
            id: 7,
            question: 'qn7',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 2,
            points: 1
        },
        {
            id: 8,
            question: 'qn8',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 2,
            points: 1
        },
        {
            id: 9,
            question: 'qn9',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 2,
            points: 1
        },
        {
            id: 10,
            question: 'qn10',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 2,
            points: 1
        },
        {
            id: 11,
            question: 'qn11',
            options: 'op1,op2,op3,op4',
            correctOption: 'op3',
            quizId: 3,
            points: 1
        },
        {
            id: 12,
            question: 'qn12',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 3,
            points: 1
        },
        {
            id: 13,
            question: 'qn13',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 3,
            points: 1
        },
        {
            id: 14,
            question: 'qn14',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 3,
            points: 1
        },
        {
            id: 15,
            question: 'qn15',
            options: 'op1,op2,op3,op4',
            correctOption: 'op1',
            quizId: 3,
            points: 1
        }
    ]
}
