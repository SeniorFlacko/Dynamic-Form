import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if (question.value === false) {
        group[question.key] = question.required ? new FormControl(false, Validators.required)
                                                : new FormControl(false || '');
                                                console.log('False');
      }
      else{
        console.log('No False');
        
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                : new FormControl(question.value || '');
      }

    });
    console.log(group);
    
    return new FormGroup(group);
  }
}