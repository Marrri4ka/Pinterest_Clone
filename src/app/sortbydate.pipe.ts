import {Pipe, PipeTransform } from '@angular/core';
import { Pin } from './models/pin.model';


@Pipe({

  name: "sortbydate",
  pure: false

})

export class SortByDatePipe implements PipeTransform {
  transform(input: Pin[], filterType){
    var output: Pin[]=[];

    function comparatorName(a,b)
    {
      return (a.name<b.name?-1:(a.name>b.name?1:0));
    }

    if(filterType==="AZ")
    {
      output= input.sort(comparatorName);
    }
    if(filterType==="ZA")
    {
      output= input.sort(comparatorName).reverse();
    }

    return output;
  }
}
