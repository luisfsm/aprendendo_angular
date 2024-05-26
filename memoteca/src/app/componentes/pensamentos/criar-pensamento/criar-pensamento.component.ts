import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../service/pensamento.service';
import { PensamentoDTO } from '../model/pensamento-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor(private pensamentoService: PensamentoService,
             private  router: Router) { }

  ngOnInit(): void {
  }
  pensamento: PensamentoDTO = new PensamentoDTO();


  salvarPensamento(): void{
    this.pensamentoService.criarPensamento(this.pensamento).subscribe((resultado)=>{
      this.router.navigate(["listar-pensamento"]);
    });

  }

  cancelarPensamento() : void{
    this.router.navigate(["listar-pensamento"]);
  }
    
}
