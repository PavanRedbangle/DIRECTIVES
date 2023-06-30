import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showStatus:boolean=true;
  arr=['Fortuner','Enova','toyoto','benz']
  //ngStyles
  fontstyle:any;
  fontweight:any;
  fontsize:any;
  //ngmodel
  name:any
  constructor(){
    this.fontstyle='normal'
    this.fontweight='normal'
    this.fontsize='20px'
  }
  toggleStatus(){
    this.showStatus=!this.showStatus
  }
  
}
