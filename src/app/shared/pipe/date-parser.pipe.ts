import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateParser',
})
export class DateParserPipe implements PipeTransform {
  transform(value: string, type?: string): unknown {
    const date = new Date(value);
    if (type == 'shortDate') {
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      return day + month.slice(0, 3) + '. ' + year;
    } else if (type == 'numberDate') {
      const year = date.getFullYear();
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1);

      return day + '.' + month + '.' + year;
    } else {
      return;
    }
  }
}
