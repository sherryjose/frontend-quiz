import { ElementRef } from '@angular/core';
import { ProgressDirective } from './progress.directive';

fdescribe('ProgressDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const directive = new ProgressDirective(el);
    expect(directive).toBeTruthy();
  });
});
