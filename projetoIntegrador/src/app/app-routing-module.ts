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
  },
  {
    path: 'exercicios2',
    loadChildren: () => import('./lista-exercicios2/lista-exercicios2-module')
      .then(m => m.ListaExercicios2Module)
  },
  {
    path: 'modulo-corpo',
    loadChildren: () => import('./modulo-corpo/modulo-corpo-module')
      .then(m => m.ModuloCorpoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }