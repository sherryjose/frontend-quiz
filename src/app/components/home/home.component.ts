import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizList } from './models/quiz-list.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quizList: Observable<QuizList>;

  constructor(private readonly dataService: DataService) { }

  ngOnInit() {
    this.quizList = this.dataService.getQuizList();
  }
}
