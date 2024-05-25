import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento-dto';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaDePensamentos: Array<PensamentoDTO> = [{
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  },
  {
    conteudo: 'I love Angular 2 ',
    autoria: 'Luis Felipe',
    modelo: 'modelo2'

  },
  {
    conteudo: "Passando Dados por components Angular ",
    autoria: 'Luis Felipe',
    modelo: 'modelo2'

  }]
}
