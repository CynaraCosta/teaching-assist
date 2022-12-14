import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];
  criarAluno(aluno: Aluno): Aluno {
    aluno = aluno.clone()
    let result = null;
    if (this.cpfNaoCadastrado(aluno.cpf)) {
        this.alunos.push(aluno);
        result = aluno;
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
    return !this.alunos.find(a => a.cpf == cpf);
 }

 atualizar(aluno:Aluno): void {
    aluno = aluno.clone();
    for (let a of this.alunos) {
        if (a.cpf == aluno.cpf) {
           a.metas = aluno.metas;
        }
    }
  }

  getAlunos(): Aluno[] {
    var result: Aluno[] = [];
    for (let a of this.alunos) {
      result.push(a.clone());
    }
    return result;
  }

} 