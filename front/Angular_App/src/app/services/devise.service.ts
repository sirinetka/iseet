import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Devise {
  code: string;
  nom: string;
  tauxChange: number;
  dateMaj: string;
}

export interface ConversionRequest {
  montant: number;
  deviseSource: string;
  deviseCible: string;
}

export interface ConversionResponse {
  montantOriginal: number;
  montantConverti: number;
  taux: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  private apiUrl = 'http://localhost:8888/DEVISE-SERVICE/api';

  constructor(private http: HttpClient) {}

  getDevises(): Observable<Devise[]> {
    return this.http.get<Devise[]>(`${this.apiUrl}/devises`);
  }

  convertirMontant(req: ConversionRequest): Observable<ConversionResponse> {
    return this.http.post<ConversionResponse>(`${this.apiUrl}/conversions`, req);
  }

  updateTaux(code: string, taux: number): Observable<Devise> {
    return this.http.put<Devise>(`${this.apiUrl}/devises/${code}?taux=${taux}`, {});
  }
}
