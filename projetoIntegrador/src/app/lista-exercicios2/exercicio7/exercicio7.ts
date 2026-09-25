import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  standalone: false,
  templateUrl: './exercicio7.html',
  styleUrl: './exercicio7.scss',
})
export class Exercicio7 {
  disciplinas: string[] = [
    'Programação',
    'Banco de Dados',
    'Engenharia de Software',
    'Sistemas Operacionais',
    'Redes de Computadores',
    'Desenvolvimento Web'
  ];
}
