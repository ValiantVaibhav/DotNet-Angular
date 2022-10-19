import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

            //----------------------
            //BELOW CODE IS USING TEMPLATE REFERENCE METHOD
            //----------------------

  // @ViewChild('FormName') addPropertyForm? : NgForm;
  // @ViewChild('formTabs') formTabs?: TabsetComponent;

  // propertyType : Array<string> = ["House","Villa","Bungalow","Apartment","Duplex"]
  // furnishedType : Array<string> = ["Fully","Semi","Unfurnished"]

  // propertyPreview : IPropertyBase = {
  //   id : null,
  //   name : '',
  //   price : null,
  //   sellRent : null,
  //   PType : null,
  //   FType : null,
  //   BHK : null,
  //   builtArea : null,
  //   city : null,
  //   RTM : null,
  //   carpetArea : null,
  //   maintenance : null,
  //   mainEntrace : null,
  //   imageURL : null,
  //   address : null,
  //   address2 : null,
  //   address3 : null,
  //   description : null,
  //   totalFloor : null,
  //   floorNo : null,
  //   AOP : null,
  //   bathrooms : null,
  //   gated : null,
  //   security : null,
  //   posession : null,
  //   postedOn : null,

  // }

  // constructor(private router : Router) { }

  // ngOnInit() {
  // }

  // onBackButtonClick(){
  //   this.router.navigate(["/"]);
  // }

  // // onSubmit(FormName : NgForm){
  // //   console.log("Form submitted");
  // //   console.log(this.addPropertyForm)

  // // }

  // onSubmit(){
  //   console.log("Form Submitted");
  //   console.log(this.addPropertyForm);
  // }

  // selectTab(tabId : number){
  //   if(this.formTabs.tabs[tabId]){
  //     this.formTabs.tabs[tabId].active = true;
  //   }
  // }

  //----------------------
  //BELOW CODE IS USING REACTive APPROACH
  //----------------------

  addPropertyForm : FormGroup;
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  nextButtonClicked : boolean = false;

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

  constructor(private fb : FormBuilder, private router : Router){

  }

  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({

      basicInfo : this.fb.group({
        SellRent : [null, Validators.required],
        PType : [null, Validators.required],
        FType : [null, Validators.required], 
      }),

      priceInfo : this.fb.group({
        name : [null, Validators.required],
      price : [null, Validators.required]
      }),

     
      
    })
  }

  //----------------------
  // getter methods
  //----------------------

  get BasicInfo(){
    return this.addPropertyForm.controls.basicInfo as FormGroup
  }

  get SellRent(){
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  onSubmit(){
      console.log("Form Submitted");
      console.log(this.addPropertyForm);
    }

  onBackButtonClick(){
       this.router.navigate(["/"]);
     }

  selectTab(tabId : number, isCurrentTabValid? : boolean ){
    this.nextButtonClicked = true;
    console.log("isCurrent tab valid",isCurrentTabValid);
      if( isCurrentTabValid){
        this.formTabs.tabs[tabId].active = true;
      }
    }

}
