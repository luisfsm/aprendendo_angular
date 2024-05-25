import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamentos.component';
import { CardPensamentoComponent } from './componentes/pensamentos/card-pensamento/card-pensamento.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    CardPensamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule, AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
