import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'quiz',
  templateUrl: 'quiz.component.html',
  providers: [QuizService]
})

export class QuizComponent implements OnInit, OnDestroy {

  q: any;
  score: number;

  questions: any;
  currIndex = 0;
  showScore: boolean;


  constructor(private QuizService: QuizService, private route: ActivatedRoute, private router: Router) {
    this.score = 0;
  }


  CheckAnswer(answer) {
    let currentQuestion = this.questions[this.currIndex];
    if (answer == currentQuestion.answers[currentQuestion.correctIndex])
      this.score += 10;
    if (this.currIndex == this.questions.length - 1) {
      this.showScore = true;
    }

    this.currIndex++;

  }

  ngOnInit() {

    this.QuizService.getQuestion().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });

    this.showScore = false;
  }

  ngOnDestroy() {

  }

}

