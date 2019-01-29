import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  public codigo = `
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
    
  ];`;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}