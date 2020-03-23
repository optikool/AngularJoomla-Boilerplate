import { EllipsisFormatterPipe } from './ellipsis-formatter.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('EllipsisFormatterPipe', () => {
  let sanitizer: DomSanitizer;

  it('create an instance', () => {
    const pipe = new EllipsisFormatterPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
