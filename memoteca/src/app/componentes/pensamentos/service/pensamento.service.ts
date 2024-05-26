import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PensamentoDTO } from '../model/pensamento-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly urlApi: string = "http://localhost:3000"; ;
  constructor(private http: HttpClient) {}

  getPensamentos() : Observable<PensamentoDTO[]>{
    return this.http.get<PensamentoDTO[]>(`${this.urlApi}/pensamentos`);
  }

  criarPensamento(pensamento: PensamentoDTO): Observable<PensamentoDTO> {
    return this.http.post<PensamentoDTO>(`${this.urlApi}/pensamentos`, pensamento);
  }

  deletePensamento(pensamento: PensamentoDTO): Observable<PensamentoDTO>{
    return this.http.delete<PensamentoDTO>(`${this.urlApi}/pensamentos/${pensamento.id}`);
  }

}
