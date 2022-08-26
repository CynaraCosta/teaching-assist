import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { MetasComponent } from './metas.component';
import { AlunosComponent } from './alunos.component';
import { AppComponent } from './app.component';
import { AlunoService } from './aluno.service';


@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    AlunosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      }
    ])
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
