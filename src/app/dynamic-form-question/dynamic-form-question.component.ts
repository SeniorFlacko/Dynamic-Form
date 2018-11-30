import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase } from '../question-base';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit{
  ngOnInit(): void {
    this.form.controls[this.question.key].valueChanges.subscribe(data =>{
      console.log('Valor cambio: ',data);
    });
  }
  
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
  get valor() { return this.form.controls[this.question.key].value; }
}
