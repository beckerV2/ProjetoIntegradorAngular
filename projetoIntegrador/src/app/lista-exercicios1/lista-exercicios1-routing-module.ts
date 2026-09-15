import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';
import { Exercicio6 } from './exercicio6/exercicio6';
import { Exercicio7 } from './exercicio7/exercicio7';
import { Exercicio8 } from './exercicio8/exercicio8';

const routes: Routes = [
  {path: 'exercicio1', component: Exercicio1},
  {path: 'exercicio2', component: Exercicio2},
  {path: 'exercicio3', component: Exercicio3},
  {path: 'exercicio4', component: Exercicio4},
  {path: 'exercicio5', component: Exercicio5},
  {path: 'exercicio6', component: Exercicio6},
  {path: 'exercicio7', component: Exercicio7},
  {path: 'exercicio8', component: Exercicio8}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
