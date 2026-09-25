import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss',
})
export class Exercicio6 {
   nomesIniciais: string[] = [
    'Felipe',
    'João',
    'Maria',
    'Carlos',
    'Ana'
  ];

  nomes: string[] = [...this.nomesIniciais];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.nomesIniciais];
  }
}
