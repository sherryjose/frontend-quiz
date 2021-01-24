export const mockData = {
    quizList: [
        {
            id: 1,
            name: 'HTML Quiz',
            description: 'The quiz tests your understanding of HTML and its usage',
            time: 15
        },
        {
            id: 2,
            name: 'CSS Quiz',
            description: 'The quiz tests your understanding of Cascading Style Sheets',
            time: 20
        },
        {
            id: 3,
            name: 'JavaScript Quiz',
            description: 'The quiz tests your understanding of basic to advanced JavaScript concepts',
            time: 30
        }
    ],
    quizQuestions: [
        {
            id: 1,
            question: 'Find the element or event that is not present in HTML.',
            options: 'onoffline|<date>|onpopstate|<time>',
            correctOption: '<date>',
            quizId: 1,
            points: 1
        },
        {
            id: 2,
            question: 'Which form tag attribute helps to bypass validation?',
            options: 'novalidate|formnovalidate|Either of the above|None of the above',
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
            question: `Fill in the blanks such that img_large.jpg and img_medium.jpg get displayed for large(>=992px) and medium(768px to 991px) screen widths respectively.<br>
            &lt;picture&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;source media="(min-width:____)" srcset="img_large.jpg"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;source media="(min-width:____)" srcset="img_medium.jpg"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="img_small.jpg" alt="small image" style="width:auto;"&gt;<br>
            &lt;/picture&gt;`,
            options: `768px, 992px|992px, 768px|Both of the above|None of the above`,
            correctOption: '992px, 768px',
            quizId: 1,
            points: 1
        },
        {
            id: 5,
            question: `&lt;input type="search" id="search" name="search" pattern="____"&gt;<br>
            Choose the regex to validate if the search input contains only numbers.`,
            options: '\\D+|\\d+|\\w+|[^A-Za-z]+',
            correctOption: '\\d+',
            quizId: 1,
            points: 1
        },
        {
            id: 6,
            question: `@media not|only mediatype and (expressions) {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;// CSS<br>
                        }<br>
                        Which of the following belongs to a media type?`,
            options: 'screen|speech|print|All of the above',
            correctOption: 'All of the above',
            quizId: 2,
            points: 2
        },
        {
            id: 7,
            question: `What is the color of the emphasized text?
                        <br>&lt;!DOCTYPE html&gt;<br>
                        &lt;html&gt;<br><br>
                        &lt;head&gt;<br>
                            &nbsp;&nbsp;&lt;style&gt;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;#pageTitle&gt;em {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: orange;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>

                            &nbsp;&nbsp;&nbsp;&nbsp; h1&gt;em {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: fuchsia;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                            &nbsp;&nbsp;&lt;/style&gt;<br>
                        &lt;/head&gt;<br><br>

                        &lt;body&gt;<br>
                            &nbsp;&nbsp;&lt;h1 id="pageTitle" style="color: green"&gt;Twist of Taste &lt;em&gt;*Explore the world of spices!*&lt;/em&gt;&lt;/h1&gt;<br>
                        &lt;/body&gt;<br><br>

                        &lt;/html&gt;`,
            options: 'fuchsia|green|orange|black',
            correctOption: 'orange',
            quizId: 2,
            points: 2
        },
        {
            id: 8,
            question: `Which box-sizing value does not include border and padding in the element's width and height?`,
            options: 'content-box|border-box|fit-content|None of the above',
            correctOption: 'content-box',
            quizId: 2,
            points: 2
        },
        {
            id: 9,
            question: 'Which property is not a part of the column-rule shorthand?',
            options: 'column-rule-color|column-rule-style|column-rule-position|column-rule-width',
            correctOption: 'column-rule-position',
            quizId: 2,
            points: 2
        },
        {
            id: 10,
            question: `Fill in the blank with a pseudo-class that would affect only the 2nd paragraph.
                        <br>&lt;!DOCTYPE html&gt;<br>
                        &lt;html&gt;<br><br>
                        &lt;head&gt;<br>
                            &nbsp;&nbsp;&lt;style&gt;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;p:nth-last-of-type(odd) {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: tomato;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;}<br><br>

                                &nbsp;&nbsp;&nbsp;&nbsp;p__________ {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: plum;<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                            &nbsp;&nbsp;&lt;/style&gt;<br>
                        &lt;/head&gt;<br><br>

                        &lt;body&gt;<br>
                            &nbsp;&nbsp;&lt;h3&gt;Para 1&lt;/h3&gt;<br>
                            &nbsp;&nbsp;&lt;p&gt;The first paragraph&lt;/p&gt;<br>
                            &nbsp;&nbsp;&lt;h3&gt;Para 2&lt;/h3&gt;<br>
                            &nbsp;&nbsp;&lt;p&gt;The second paragraph&lt;/p&gt;<br>
                        &lt;/body&gt;<br><br>

                        &lt;/html&gt;`,
            options: ':nth-child(even)|:last-of-type|:nth-last-child(2n+1)|All of the above',
            correctOption: ':last-of-type',
            quizId: 2,
            points: 2
        },
        {
            id: 11,
            question: 'Select the feature that was not introduced in ES12.',
            options: 'numeric separators (1_000_000)|Promise.any()|Promise.allSettled()|String.prototype.replaceAll()',
            correctOption: 'Promise.allSettled()',
            quizId: 3,
            points: 3
        },
        {
            id: 12,
            question: `function* generate() {<br>
                        &nbsp;&nbsp;yield 1;<br>
                        &nbsp;&nbsp;yield 2;<br>
                        &nbsp;&nbsp;yield Promise.resolve(3);<br>
                        &nbsp;&nbsp;yield Promise.resolve(4);<br>
                        &nbsp;&nbsp;yield 5;<br>
                        }<br><br>

                        (async function () {<br>
                            &nbsp;&nbsp;for await (let num of generate()) {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;console.log(num);<br>
                            &nbsp;&nbsp;}<br>
                        })();<br><br>
                        // OUTPUT<br>
                        // 1<br>
                        // 2<br>
                        // ______<br>
                        // ______<br>
                        // 5<br><br>

                        Fill in with the right output values.
            `,
            options: '3 and 4|Promise {<fulfilled>: 3} and Promise {<fulfilled>: 4}|indeterminate|None of the above',
            correctOption: '3 and 4',
            quizId: 3,
            points: 3
        },
        {
            id: 13,
            question: `function getValue(arr) {<br>
                            &nbsp;&nbsp;arr.push(4);<br>
                            &nbsp;&nbsp;arr = [7, 8, 9];<br>
                            &nbsp;&nbsp;console.log(arr);<br>
                        }<br><br>

                        var val = [1, 2];<br>
                        getValue(val);<br>
                        console.log(val);<br><br>
                        
                        What do the console statements print?`,
            options: '[1, 2, 4] and [7, 8, 9]|[7, 8, 9] and [1, 2, 4]|[1, 2, 4, 7, 8, 9] and [1, 2]|[7, 8, 9] and [1, 2]',
            correctOption: '[7, 8, 9] and [1, 2, 4]',
            quizId: 3,
            points: 3
        },
        {
            id: 14,
            question: `What is the output of the below code?<br>
                        function sum() {<br>
                        &nbsp;&nbsp;return num1 => num2 => num1 + num2;<br>
                        }<br><br>

                        let curriedSum = sum();<br>
                        curriedSum(10)(10);<br>
                        curriedSum(20)(20);`,
            options: '20|40|20 and 40|compiler error',
            correctOption: '40',
            quizId: 3,
            points: 3
        },
        {
            id: 15,
            question: `Find the output for the below code:<br>
                        const user = {<br>
                            &nbsp;&nbsp;name: 'Ratan',<br>
                            &nbsp;&nbsp;place: {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;city: 'Siliguri',<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;country: 'India'<br>
                            &nbsp;&nbsp;}<br>
                        };<br><br>

                        const { name, place: { city, country } } = user;<br><br>

                        console.log(place);`,
            options: 'undefined|{ city: \'Siliguri\', country: \'India\' }|ReferenceError: place is not defined|null',
            correctOption: 'ReferenceError: place is not defined',
            quizId: 3,
            points: 3
        }
    ]
}
