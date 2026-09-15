import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios1-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';

@NgModule({
  declarations: [Exercicio1, Exercicio2, Exercicio3, Exercicio4, Exercicio5],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
