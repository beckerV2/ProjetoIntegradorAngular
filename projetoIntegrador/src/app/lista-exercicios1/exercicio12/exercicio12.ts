import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.scss',
})
export class Exercicio12 {
  nomeAluno: string = '';
  quantidadeDisciplinas: number = 1;
  mensagem: string = '';

  aumentarDisciplinas() {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = 'Matrícula realizada para ' 
      + this.nomeAluno 
      + ' em ' 
      + this.quantidadeDisciplinas 
      + ' disciplinas.';
  }
}
