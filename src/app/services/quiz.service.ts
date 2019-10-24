import { Injectable } from "@angular/core";
import { Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';



@Injectable()
export class QuizService {


    questions:any;
    loadQuestions(){
        return this.questions;
    }

    constructor(private http: Http) {
    }

     getQuestion() {
        return this.http.get("/assets/quiz.json").map( (response: Response) => {
            const data = response.json();
            return data.questions;
         });; 
    }




}