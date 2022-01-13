import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fone'
})
export class FonePipe implements PipeTransform {

  transform(tel: any): string {
    if (tel) {
      const value = tel.toString().replace(/\D/g, '');

      let formatted = '';

      if (value.length > 12) {
        formatted = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
        formatted = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
        formatted = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
        formatted = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
        formatted = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
        formatted = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (tel !== '') { formatted = value.replace(/^(\d*)/, '($1'); }
      }
      return formatted;
    }

    return '';
  }
}