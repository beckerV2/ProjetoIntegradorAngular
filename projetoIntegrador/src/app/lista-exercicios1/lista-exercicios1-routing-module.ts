import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Exercicio1 } from './exercicio1/exercicio1';

const routes: Routes = [
  {path: 'exercicio1', component: Exercicio1},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
