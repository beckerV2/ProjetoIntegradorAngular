import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloCorpoRoutingModule } from './modulo-corpo-routing-module';
import { Cabecalho } from './cabecalho/cabecalho';
import { Principal } from './principal/principal';

@NgModule({
  declarations: [Cabecalho, Principal],
  imports: [CommonModule, ModuloCorpoRoutingModule],
  exports: [Cabecalho]
})
export class ModuloCorpoModule {}
