import { DateFormatterPipe } from './date-formatter.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

describe('DateFormatterPipe', () => {
  let sanitizer: DomSanitizer;
  let datePipe: DatePipe;

  it('create an instance', () => {
    const pipe = new DateFormatterPipe(sanitizer, datePipe);
    expect(pipe).toBeTruthy();
  });
});
