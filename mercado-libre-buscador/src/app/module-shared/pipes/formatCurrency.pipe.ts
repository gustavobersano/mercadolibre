import { PipeTransform, Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})

export class FormatCurrencyPipe implements PipeTransform {

  transform(item: any, replace, replacement): any {
    if(item == null) return "";
    item = item.replace(',', '.');
    item = item.replace('$', '$ ');
    return item;
  }
}