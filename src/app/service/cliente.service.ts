import { Observable } from 'rxjs';
import { Cliente } from './../model/Cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  url: string = environment.baseUrl

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}cliente`);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}cliente/${id}`);
  }

  findByName(nome: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}cliente/por-nome/${nome}`);
  }

  findByIdade(idade: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}cliente/por-idade/${idade}`);
  }

  post(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}cliente`, cliente);
  }

  put(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}cliente`, cliente);
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.url}cliente/${id}`);
  }
}
