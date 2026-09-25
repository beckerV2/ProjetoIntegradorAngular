import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss'
})
export class Exercicio9 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 150,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 4
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 2
    }
  ];

}