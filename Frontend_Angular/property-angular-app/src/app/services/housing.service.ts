import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IPropertyBase } from '../model/IPropertyBase';
import { IProperty } from '../property/IProperty.interface';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http : HttpClient) { }

//this method returns an Observable of type IProperty[]
getAllPropertiesData(sellRent : number) : Observable<IPropertyBase[]>{
  return this.http.get<IPropertyBase[]>('Data/properties.json').pipe(

    map(data=>{
      const propertiesArray : Array<IPropertyBase> = [];

      for( const i in data){

        if(data.hasOwnProperty(i) && data[i].sellRent==sellRent){
          propertiesArray.push(data[i]);
        }

      }
      return propertiesArray;
    })
  )
}
}
