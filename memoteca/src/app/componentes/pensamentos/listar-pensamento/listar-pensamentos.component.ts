import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento-dto';
import { PensamentoService } from '../service/pensamento.service';
@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaDePensamentos: Array<PensamentoDTO> = [];
  
  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.getPensamentos().subscribe((listaDePensamentos) => {
      this.listaDePensamentos = listaDePensamentos;
    })
  }
  
}
