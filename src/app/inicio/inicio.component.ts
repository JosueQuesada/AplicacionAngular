import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = 'mi aplicación demostrativa de Angular';
  autor = 'Josué Quesada';
  universidad = 'Universidad de Costa Rica';
  carrera = 'Bachiller en Informática Empresarial'
  constructor() { }

  ngOnInit() {
  }

}
