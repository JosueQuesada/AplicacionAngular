import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaDePersonasComponent,
    KanbanBoardComponent,
    ContactoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
