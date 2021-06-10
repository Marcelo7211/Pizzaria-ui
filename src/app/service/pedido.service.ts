import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  url: string = environment.baseUrl;

  findAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.url}pedido`);
  }

  findById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.url}pedido/${id}`);
  }

  post(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.url}pedido`, pedido);
  }

  put(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.url}pedido`, pedido);
  }

  delete(id: number): Observable<Pedido> {
    return this.http.delete<Pedido>(`${this.url}pedido/${id}`);
  }
}
