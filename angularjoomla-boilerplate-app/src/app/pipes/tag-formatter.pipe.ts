import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFormatter'
})
export class TagFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map((item) => {
      return item.title;
    }).join(', ');
  }
}
