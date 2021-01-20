import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProgress]'
})
export class ProgressDirective implements OnChanges {
  @Input() qnIndex: number;
  @Input() qnCount: number;
  width = 0;

  constructor(private readonly el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.qnIndex.firstChange) {
      const chunkLength = 100 / this.qnCount;
      this.width += chunkLength;
      this.el.nativeElement.style.width = `${this.width}%`;
    }
  }
}
