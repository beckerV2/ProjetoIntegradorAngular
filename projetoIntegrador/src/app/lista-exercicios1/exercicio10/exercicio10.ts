import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.scss',
})
export class Exercicio10 {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  entrar() {
    this.mensagem = 'Bem-vindo, ' + this.usuario + '!';
  }
}
