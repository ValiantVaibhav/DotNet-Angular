import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public propertyId : number = 0;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    //getting the initial id from the url request and converting to Number format
    //this.propertyId = Number(this.route.snapshot.params['id']);
    //Another way to format into Number
    this.propertyId = +this.route.snapshot.params['id'];

    //here subscribe is used to initialize the property everytime when there is change in params
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  onSelectNextButton(){

    this.propertyId += 1;
    //this.router.navigate(['property-details/'+this.propertyId]);
    //another way to DO this
    this.router.navigate(['property-details',this.propertyId])
  }

}
