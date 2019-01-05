import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/Models/persona'
@Component({
  selector: 'app-lista-de-personas',
  templateUrl: './lista-de-personas.component.html',
  styleUrls: ['./lista-de-personas.component.css']
})
export class ListaDePersonasComponent implements OnInit {

  arregloDePersonas: Persona[]=[
    {id:1, nombre:"Andres", apellido: "Rojas", telefono: "8888-8888" , genero:"M"},
    {id:1, nombre:"Maria", apellido: "Soto", telefono: "8888-8888" , genero:"F"},
    {id:1, nombre:"Ivonne", apellido: "Castro", telefono: "8888-8888" , genero:"F"}
  ];

  seleccionarPersona: Persona = new Persona();

  
  AbrirParaEditar(persona : Persona){
this.seleccionarPersona = persona;

  }

  agregar(){
    if(this.seleccionarPersona.id === 0){
      this.seleccionarPersona.id = this.arregloDePersonas.length +1;
      this.arregloDePersonas.push(this.seleccionarPersona);
    }
    this.seleccionarPersona = new Persona();
  }

  eliminar(){
if(confirm("Esta seguro que quiere eliminar?")){
  this.arregloDePersonas = this.arregloDePersonas.filter(x => x != this.seleccionarPersona)
  this.seleccionarPersona = new Persona();
}
   
  }
  constructor() { }

  ngOnInit() {
  }

}
