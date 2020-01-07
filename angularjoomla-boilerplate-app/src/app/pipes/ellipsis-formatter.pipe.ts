import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'ellipsisFormatter'
})
export class EllipsisFormatterPipe implements PipeTransform {
  private stringArray: Array<any>;

  constructor(private sanitized: DomSanitizer) {}

  transform(value: string, args?: number): any {
    let text = this.sanitized.sanitize(SecurityContext.HTML, value);
    this.stringArray = text.split(' ');

    return this.stringArray.slice(0, args - 1).join(' ') + '...';
  }

}
