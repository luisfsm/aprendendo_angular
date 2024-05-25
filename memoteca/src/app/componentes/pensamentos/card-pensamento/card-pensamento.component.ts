import { Component, Input, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento-dto';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  pensamento : PensamentoDTO = new PensamentoDTO();

  larguraPensamento(): string {
    if(this.pensamento.conteudo?.length ?? 0 >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
