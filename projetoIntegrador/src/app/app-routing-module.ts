import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livro',
    loadChildren: () => import('./livro/livro-module').then(m => m.LivroModule)
  },
  {
    path: 'exercicios1',
    loadChildren: () => import('./lista-exercicios1/lista-exercicios1-module')
      .then(m => m.ListaExercicios1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }