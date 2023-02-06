import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isExpanded: boolean = false;
  isShown: boolean = true; 
  funcName1(){
    this.isExpanded = true;
  }

  funcName2(){
    this.isExpanded = false;
    this.isShown =  this.isShown;
    
  }

}
