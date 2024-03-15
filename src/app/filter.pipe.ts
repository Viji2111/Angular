import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterText: any): any {
   if(!value) return null;
   if(!filterText) return value;

   filterText=filterText.toLowerCase();
   return value.filter(function(item:any){
    return JSON.stringify(item).toLowerCase().includes(filterText);
   })
  }

}
