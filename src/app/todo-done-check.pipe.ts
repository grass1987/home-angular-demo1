import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDoneCheck'
})
export class TodoDoneCheckPipe implements PipeTransform {
/**
  transform(value: any, args?: any): any {
    return null;
  }
 */
  transform(todoDone: boolean,numberTest: number, displayNotDone: boolean): any {
    if (todoDone) {
      return '(已完成)';
    } else if (displayNotDone) {

      return '(未完成)';
    }
    if(numberTest>100)
      return'大於100的numberTest';
    return '';
  }

}
