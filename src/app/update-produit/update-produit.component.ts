import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = signal<Produit>(new Produit());

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.produitService.consulterProduit(id).subscribe(prod => {
      this.currentProduit.set(prod);
    });
  }

  updateProduit(): void {
    this.produitService.updateProduit(this.currentProduit()).subscribe(() => {
      this.router.navigate(['produits']);
    });
  }
}