import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuizQuestions } from './models/quiz-questions.model';
import { QuizResult } from './models/quiz-result.model';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  quizId: number;
  quizQuestions: any;
  qnIndex: number;
  quizAnswers: any;
  quizResult: any;
  timer: any;
  totalSeconds = 3;
  destroy$ = new Subject<boolean>();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly quizService: QuizService) {
    this.activatedRoute.paramMap.subscribe(params => this.quizId = +params.get('id'));
    this.quizAnswers = { quizId: this.quizId, mappings: [] };
  }

  ngOnInit() {
    this.quizService.getQuizQuestions(this.quizId).pipe(takeUntil(this.destroy$))
      .subscribe((data: QuizQuestions) => {
        this.quizQuestions = {
          quizName: data.name,
          questions: data.questions.map(elem => ({
            qnId: elem.id,
            question: elem.question,
            options: elem.options.split(',')
          }))
        };
        this.qnIndex = 0;
        this.startTimer();
      });
  }

  startTimer() {
    this.totalSeconds = 3;
    this.timer = setInterval(() => {
      this.totalSeconds--;
      if (this.totalSeconds === -1) {
        this.qnIndex++;
        this.totalSeconds = 3;
        if (this.qnIndex === this.quizQuestions.questions.length) {
          this.getScore();
        }
      }
    }, 1000);
  }

  onSelection(qnId, optionIndex) {
    if (this.qnIndex < this.quizQuestions.questions.length) {
      clearInterval(this.timer);
      this.startTimer();
      this.quizAnswers.mappings.push({ qnId: qnId, submittedOption: this.quizQuestions.questions[this.qnIndex].options[optionIndex] });
      this.qnIndex++;
    }
    if (this.qnIndex === this.quizQuestions.questions.length) {
      this.getScore();
    }
  }

  getScore() {
    clearInterval(this.timer);
    this.quizAnswers.quizId = this.quizId;
    this.quizService.getQuizScore(this.quizAnswers).pipe(takeUntil(this.destroy$))
      .subscribe((data: QuizResult) => {
        this.quizResult = {
          score: data.score,
          questions: data.questions.map(elem => ({
            question: this.quizQuestions.questions.filter(qn => qn.qnId === elem.qnId)[0].question,
            submittedOption: elem.submittedOption,
            correctOption: elem.correctOption
          }))
        };
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
