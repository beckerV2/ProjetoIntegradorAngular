import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivro } from './cad-livro/cad-livro';
import { Listar } from './listar/listar';

const routes: Routes = [
  {path: 'CadLivro', component: CadLivro},
  {path: 'Listar', component: Listar}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroRoutingModule {}
