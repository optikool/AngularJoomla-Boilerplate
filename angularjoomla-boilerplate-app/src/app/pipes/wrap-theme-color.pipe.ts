import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'wrapThemeColor'
})
export class WrapThemeColorPipe implements PipeTransform {
  private wrapper;
  private stringArray: Array<any>;
  private size: number;

  constructor(private sanitized: DomSanitizer) {}

  transform(value: any, args?: any): any {
    this.stringArray = value.split(' ');
    this.size = this.stringArray.length;

    if (this.size > 1) {
      this.stringArray[this.size - 1] = `<span class="theme_color">${this.stringArray[this.size - 1]}</span>`;
      this.wrapper = this.stringArray.join(' ');
      return this.sanitized.bypassSecurityTrustHtml(this.wrapper);
    }

    return value;
  }

}
