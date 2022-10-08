import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';
// import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties?: Array<IPropertyBase>;
  sellRent = 1;
  // constructor(private http : HttpClient) { }
  constructor(private route : ActivatedRoute, private housingService : HousingService){}

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.sellRent=2; //2 means the property is for Rent
    }
    this.housingService.getAllPropertiesData(this.sellRent).subscribe(
      data=>{
        console.log();
        this.Properties = data;
        console.log(this.route.snapshot.url.toString())
      }, error=>{
        console.log('http Error : ');
        console.log(error);
      }
    )



    // this.http.get('Data/properties.json').subscribe(

    //   data=>{
    //     this.Properties = data;
    //     console.log();
    //   }
    //)
  }



//   Properties : Array<any> = [{
//     id : 1,
//     name : "Coastal Villa",
//     type : "Villa",
//     price : "1 crore"
//   },{
//     id : 2,
//     name : "Ashoka  Aisle",
//     type : "Aisle",
//     price : "4 crore"
//   },{
//     id : 1,
//     name : "Seaview Cottage",
//     type : "Cottage",
//     price : "3 crore"
//   },{
//     id : 1,
//     name : "Mudra House",
//     type : "House",
//     price : "1 crore"
//   },{
//     id : 1,
//     name : "Lotus Apartment",
//     type : "Apartment",
//     price : "50 lacs"
//   },{
//     id : 1,
//     name : "Kela Bhawan",
//     type : "Bungalow",
//     price : "1 crore"
//   },{
//     id : 1,
//     name : "Coastal Villa",
//     type : "Villa",
//     price : "1 crore"
//   }
// ]

}
