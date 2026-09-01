import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing-module';
import { CadLivro } from './cad-livro/cad-livro';
import { Listar } from './listar/listar';

@NgModule({
  declarations: [CadLivro, Listar],
  imports: [CommonModule, LivroRoutingModule],
})
export class LivroModule {}
