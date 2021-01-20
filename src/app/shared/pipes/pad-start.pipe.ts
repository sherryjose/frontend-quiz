import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart'
})
export class PadStartPipe implements PipeTransform {

  transform(value: any, length: number, padValue: string): string {
    return String(value).padStart(length, padValue);
  }

}
