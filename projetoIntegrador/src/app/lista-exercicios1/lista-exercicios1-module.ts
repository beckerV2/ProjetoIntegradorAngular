import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios1-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';

@NgModule({
  declarations: [Exercicio1],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
