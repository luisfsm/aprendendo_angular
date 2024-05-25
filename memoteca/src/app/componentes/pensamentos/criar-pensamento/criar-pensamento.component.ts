import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pensamento = {
    id: "1",
    conteudo: "Aprendendo Angular",
    autoria: "Dev team",
    modelo: ""
  };


  salvarPensamento(): void{
    window.alert(this.pensamento.conteudo);
  }

  cancelarPensamento() :void{
    window.alert(this.pensamento.conteudo);
  }
    
}
