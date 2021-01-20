import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuizQuestions } from '../models/quiz-questions.model';
import { QuizResult } from '../models/quiz-result.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  QUIZ_API = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getQuizQuestions(quizId: number): Observable<QuizQuestions> {
    return this.httpClient.get<QuizQuestions>(`${this.QUIZ_API}/api/quiz-questions/all/${quizId}`);
  }

  getQuizScore(quizAnswers): Observable<QuizResult> {
    return this.httpClient.post<QuizResult>(`${this.QUIZ_API}/api/user/quiz-score`, quizAnswers);
  }
}
