import { Component, OnInit } from '@angular/core';

import { Tarea } from 'src/app/Models/tarea'

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  arregloDeTareasEstadoTres: Tarea[]=[
   // {id: 1,nombre: "saada",encargado: "asd",detalle: "asd" ,estado: "3"}
  ];
  arregloDeTareasEstadoUno: Tarea[] =[
   // {id: 1,nombre: "saada",encargado: "asd",detalle: "asd" ,estado: "1"}
  ];
  arregloDeTareasEstadoDos: Tarea[] =[
    //{id: 1,nombre: "saada",encargado: "asd",detalle: "asd" ,estado: "2"}
  ];

  seleccionarTarea: Tarea = new Tarea();

  agregar(){
   if(this.seleccionarTarea.id === 0 && this.seleccionarTarea.estado==="1"){
    this.seleccionarTarea.id = this.arregloDeTareasEstadoUno.length +1;
      this.arregloDeTareasEstadoUno.push(this.seleccionarTarea);
      this.seleccionarTarea = new Tarea();

} else if(this.seleccionarTarea.id === 0 && this.seleccionarTarea.estado === "2"){
  this.seleccionarTarea.id = this.arregloDeTareasEstadoDos.length +1;
    this.arregloDeTareasEstadoDos.push(this.seleccionarTarea);
    this.seleccionarTarea = new Tarea();

} else if(this.seleccionarTarea.id === 0 && this.seleccionarTarea.estado === "3"){
  this.seleccionarTarea.id = this.arregloDeTareasEstadoTres.length +1;
    this.arregloDeTareasEstadoTres.push(this.seleccionarTarea);
    this.seleccionarTarea = new Tarea();

} else if(this.seleccionarTarea.estado === "1"){
  this.seleccionarTarea.id = this.arregloDeTareasEstadoUno.length +1;
  this.arregloDeTareasEstadoUno.push(this.seleccionarTarea);
  this.arregloDeTareasEstadoDos = this.arregloDeTareasEstadoDos.filter(x => x != this.seleccionarTarea)
  this.arregloDeTareasEstadoTres = this.arregloDeTareasEstadoTres.filter(x => x != this.seleccionarTarea)
  this.seleccionarTarea = new Tarea();

}  else if(this.seleccionarTarea.estado === "2"){
  this.seleccionarTarea.id = this.arregloDeTareasEstadoDos.length +1;
  this.arregloDeTareasEstadoDos.push(this.seleccionarTarea);
  this.arregloDeTareasEstadoUno = this.arregloDeTareasEstadoUno.filter(x => x != this.seleccionarTarea)
  this.arregloDeTareasEstadoTres = this.arregloDeTareasEstadoTres.filter(x => x != this.seleccionarTarea)
  this.seleccionarTarea = new Tarea();
} else if(this.seleccionarTarea.estado === "3"){
  this.seleccionarTarea.id = this.arregloDeTareasEstadoTres.length +1;
  this.arregloDeTareasEstadoTres.push(this.seleccionarTarea);
  this.arregloDeTareasEstadoUno = this.arregloDeTareasEstadoUno.filter(x => x != this.seleccionarTarea)
  this.arregloDeTareasEstadoDos = this.arregloDeTareasEstadoDos.filter(x => x != this.seleccionarTarea)
  this.seleccionarTarea = new Tarea();
  
}
  
  }
  AbrirParaEditar(tarea : Tarea){
    this.seleccionarTarea = tarea;
    
      }

      eliminar(){
        if(confirm("Esta seguro que quiere eliminar?")){
          if (this.seleccionarTarea.estado === "1") {
            this.arregloDeTareasEstadoUno = this.arregloDeTareasEstadoUno.filter(x => x != this.seleccionarTarea)
            this.seleccionarTarea = new Tarea();
          } else if (this.seleccionarTarea.estado === "2"){
            this.arregloDeTareasEstadoDos = this.arregloDeTareasEstadoDos.filter(x => x != this.seleccionarTarea)
            this.seleccionarTarea = new Tarea();
          } else if (this.seleccionarTarea.estado === "3"){
            this.arregloDeTareasEstadoTres = this.arregloDeTareasEstadoTres.filter(x => x != this.seleccionarTarea)
            this.seleccionarTarea = new Tarea();
          }
   
        }
        }

      
}
