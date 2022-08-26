import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ta-gui';
  aluno: Aluno = {nome: "", cpf: "", email: "", login_git_hub: ""};
  alunoService = new AlunoService();
  gravar(a: Aluno): void {
    if(this.alunoService.gravar(a)){
      this.alunos.push(a);
      this.aluno = {nome: "", cpf: "", email: "", login_git_hub: ""}
    } else {
      this.aluno.cpf = "";
      alert("Já existe um aluno com esse CPF")
    }
  }
  alunos: Aluno[] = [];
}



