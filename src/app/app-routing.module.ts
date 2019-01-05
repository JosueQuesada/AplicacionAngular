import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './inicio/inicio.component';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [

 { path: 'inicio' , component: InicioComponent},
 { path: 'ListaDePersonas' , component: ListaDePersonasComponent},
 { path: 'KanbanBoard' , component: KanbanBoardComponent},
 { path: '**' , component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
