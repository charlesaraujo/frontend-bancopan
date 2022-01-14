import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menu = [
    {
      name: 'Home',
      url: '/home',
      icon: 'pi pi-home'
    },
    {
      name: 'Usuários',
      url: 'page/usuario',
      icon: 'pi pi-user'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
