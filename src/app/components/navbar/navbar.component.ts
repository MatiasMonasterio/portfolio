import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // como que no
    const prueba = 'mensaje';
    console.log( prueba );
    console.log('Listo');
  }

}
