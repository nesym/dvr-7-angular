import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  produits = signal<Produit[]>([]);

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.produitService.listeProduits().subscribe(prods => {
      this.produits.set(prods);
    });
  }

  supprimerProduit(p: Produit): void {
    const conf = confirm('Etes-vous sûr de vouloir supprimer ce produit ?');
    if (conf) {
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
        this.chargerProduits();
      });
    }
  }
}