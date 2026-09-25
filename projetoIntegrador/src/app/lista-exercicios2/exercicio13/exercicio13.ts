import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.scss'
})
export class Exercicio13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Fazer atividade de Angular',
      responsavel: 'Felipe',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Estudar Banco de Dados',
      responsavel: 'João',
      prioridade: 'média',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Fazer exercícios',
      responsavel: 'Maria',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Entregar trabalho',
      responsavel: 'Carlos',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Estudar para prova',
      responsavel: 'Ana',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Revisar conteúdo',
      responsavel: 'Pedro',
      prioridade: 'baixa',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

}