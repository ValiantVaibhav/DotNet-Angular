import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('FormName') addPropertyForm? : NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyType : Array<string> = ["House","Villa","Bungalow","Apartment","Duplex"]
  furnishedType : Array<string> = ["Fully","Semi","Unfurnished"]

  propertyPreview : IPropertyBase = {
    id : null,
    name : '',
    price : null,
    sellRent : null,
    PType : null,
    FType : null,
    BHK : null,
    builtArea : null,
    city : null,
    RTM : null,
    carpetArea : null,
    maintenance : null,
    mainEntrace : null,
    imageURL : null,
    address : null,
    address2 : null,
    address3 : null,
    description : null,
    totalFloor : null,
    floorNo : null,
    AOP : null,
    bathrooms : null,
    gated : null,
    security : null,
    posession : null,
    postedOn : null,

  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBackButtonClick(){
    this.router.navigate(["/"]);
  }

  onSubmit(FormName : NgForm){
    console.log("Form submitted");
    console.log(this.addPropertyForm)

  }

  selectTab(tabId : number){
    if(this.formTabs.tabs[tabId]){
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
