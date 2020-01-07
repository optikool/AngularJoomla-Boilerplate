import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
  date: number;

  constructor(private sanitized: DomSanitizer, private datePipe: DatePipe) {
    this.datePipe = new DatePipe('en-US');
    this.date = null;
  }
  transform(value: any, args?: any): any {
    let safe = this.sanitized.sanitize(SecurityContext.HTML, value);
    let date = new Date(safe);
    return this.datePipe.transform(date, 'h:mm a on MMMM dd yyyy').toUpperCase(); //  4:13 PM JUNE 13 2011
  }

}
