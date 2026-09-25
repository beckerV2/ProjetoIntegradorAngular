import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
   mostrarConcluidos: boolean = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Saúde',
      equipe: 'Equipe Beta',
      nota: 7,
      status: 'testes',
      entregue: true
    },
    {
      id: 3,
      titulo: 'Sistema de Eventos',
      equipe: 'Equipe Gamma',
      nota: null,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Plataforma Educacional',
      equipe: 'Equipe Delta',
      nota: 5.5,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Sistema de Tarefas',
      equipe: 'Equipe Epsilon',
      nota: 9,
      status: 'concluído',
      entregue: true
    },
    {
      id: 6,
      titulo: 'Aplicativo de Finanças',
      equipe: 'Equipe Zeta',
      nota: 6.5,
      status: 'desenvolvimento',
      entregue: false
    }
  ];

  alterarStatus(projeto: Projeto) {

    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';

    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';

    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';

    } else {
      projeto.status = 'planejamento';
    }
  }

  projetosConcluidos(): number {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }
}
