import { WrapThemeColorPipe } from './wrap-theme-color.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('WrapThemeColorPipe', () => {
  let sanatizer: DomSanitizer;

  it('create an instance', () => {
    const pipe = new WrapThemeColorPipe(sanatizer);
    expect(pipe).toBeTruthy();
  });
});
