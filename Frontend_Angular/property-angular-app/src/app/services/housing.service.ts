import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http : HttpClient) { }

getAllPropertiesData(){
  return this.http.get('Data/properties.json').pipe(
    map(data=>{
      const propertiesArray : Array<any> = [];

      let i:keyof Object;
      for(i in data){
        //console.log(data[i]);
        if(data.hasOwnProperty(i)){
          propertiesArray.push(data[i]);
        }

      }
      return propertiesArray;
    })
  )
}
}
