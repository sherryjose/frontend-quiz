import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuizList } from '../models/quiz-list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  QUIZ_API = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getQuizList(): Observable<QuizList> {
    return this.httpClient.get<QuizList>(`${this.QUIZ_API}/api/quiz/all`);
  }
}
