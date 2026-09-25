import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: false,
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.scss'
})
export class Exercicio1 {

  usuarioLogado: boolean = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}