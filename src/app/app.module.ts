import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { PadStartPipe } from './shared/pipes/pad-start.pipe';
import { ProgressDirective } from './shared/directives/progress.directive';
import { environment } from 'src/environments/environment';
import { MockModule } from './mock/mock.module';

let dynamicImport = environment.mockApi ? [MockModule] : [];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    PadStartPipe,
    ProgressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...dynamicImport
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
