import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {
  newProduit = new Produit();

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit(): void {
    this.produitService.ajouterProduit(this.newProduit).subscribe(() => {
      this.router.navigate(['produits']);
    });
  }
}