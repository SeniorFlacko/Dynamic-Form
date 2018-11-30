import { Injectable }       from '@angular/core';
import { QuestionBase }     from './question-base';
import { DropdownQuestion } from './dropdown-question';
import { TextboxQuestion } from './textbox-question';
import { CheckedQuestion } from './checked-question';


@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'coincidencia',
        label: 'Coincidencia',
        options: [
          {key: '0',  value: 'Coincide'},
          {key: '1',  value: 'No Coincide'},
        ],
        order: 1
      }),

      new TextboxQuestion({
        key: 'valor',
        label: 'Valor',
        value: '5000',
        required: true,
        order: 2
      }),

      new CheckedQuestion({
        key: 'mayusculas',
        label: 'Ignorar Mayúsculas',
        type: 'checkbox',
        value: false,
        required: true,
        order: 3
      }),

      new DropdownQuestion({
        key: 'raiz',
        label: 'Relativo a',
        options: [
          {key: '0',  value: 'Raiz'},
          {key: '1',  value: 'Origen'},
        ],
        order: 4
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}