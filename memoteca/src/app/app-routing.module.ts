import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamentos.component';


const routes: Routes = [
 {
  path: "criar-pensamento",
  component: CriarPensamentoComponent
 },
 {
  path: 'listar-pensamento',
  component: ListarPensamentosComponent
 },
 {
  path: '',
  redirectTo: 'listar-pensamento',
  pathMatch: 'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
