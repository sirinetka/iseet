import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reglement } from '../Modele/reglement.model';

@Injectable({ providedIn: 'root' })
export class ReglementService {
  private baseUrl = 'http://localhost:8888/REGLEMENT-SERVICE/api/reglements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Reglement[]> {
    return this.http.get<Reglement[]>(this.baseUrl);
  }

  save(reglement: Reglement): Observable<Reglement> {
    return this.http.post<Reglement>(this.baseUrl, reglement);
  }

  getByFacture(factureId: number): Observable<Reglement[]> {
    return this.http.get<Reglement[]>(`${this.baseUrl}/facture/${factureId}`);
  }
}
