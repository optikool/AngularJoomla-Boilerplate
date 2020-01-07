import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'outerElement'
})
export class OuterElementPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any): any {
    let text = value.replace('<p>', '').replace('</p>', '');
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
