import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api'; // use 8090 if you changed the port

  constructor(private http: HttpClient) {}

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.apiURL + '/' + id);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, prod);
  }

  supprimerProduit(id: number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}