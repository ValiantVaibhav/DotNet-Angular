import { Component, Input } from "@angular/core";


@Component({

  selector : 'app-property-card',
  // template : `<h1>This is a Property Card</h1>`
  templateUrl : 'property-card.component.html',
  // styles :['h1 {font-weight : normal;}']
  styleUrls : ['property-card.component.css',]
})
export class PropertyCardComponent{

  @Input() property : any;


}
