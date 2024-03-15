import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Menuvalue:boolean = false;
  menu_icon : string ='bi bi-list';
  openmenu(){
    this.Menuvalue = !this.Menuvalue;
    this.menu_icon= this.Menuvalue? 'bi bi-x':'bi bi-list';
  }
  closemenu(){
    this.Menuvalue = false;
    this.menu_icon = 'bi bi-list';

  }

}
