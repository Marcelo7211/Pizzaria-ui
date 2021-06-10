import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from '../model/Cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  url: string = environment.baseUrl;

  findAll(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(`${this.url}cardapio`);
  }

  findById(id: number): Observable<Cardapio> {
    return this.http.get<Cardapio>(`${this.url}cardapio/${id}`);
  }

  post(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.post<Cardapio>(`${this.url}cardapio`, cardapio);
  }

  put(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.put<Cardapio>(`${this.url}cardapio`, cardapio);
  }

  delete(id: number): Observable<Cardapio> {
    return this.http.delete<Cardapio>(`${this.url}cardapio/${id}`);
  }

}
