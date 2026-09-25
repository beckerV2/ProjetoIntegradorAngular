import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloCorpoModule } from '../modulo-corpo/modulo-corpo-module';

import { LivroRoutingModule } from './livro-routing-module';
import { CadLivro } from './cad-livro/cad-livro';
import { Listar } from './listar/listar';

@NgModule({
  declarations: [CadLivro, Listar],
  imports: [CommonModule, LivroRoutingModule, ModuloCorpoModule],
})
export class LivroModule {}
