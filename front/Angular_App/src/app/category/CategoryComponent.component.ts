import { Component } from '@angular/core';
import {Category} from "../Modele/Category";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-categoryproduit',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  produit: any;
  pr!: Category;

  test = {
    idP: "",
    code: new Date().getTime(),
    libelle :""
  }

  constructor(private http: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
    this.fetchProduits();
  }

  fetchProduits(): void {
    this.http.get("http://localhost:8888/CATEGORIE-SERVICE/Categories")
      .subscribe({
        next: data => {

          this.produit = data
        },
        error: err => {
          console.log(err);
        }
      })


  }
  supprimerClient(idP: number): void {
    console.log(idP);
    this.http.delete(`http://localhost:8888/CATEGORIE-SERVICE/Categories/${idP}`)
      .subscribe({
        next: () => {
          this.fetchProduits();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }
  confirmerSuppression(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.supprimerClient(id);
    } else {
      console.log('Suppression annulée.');
    }

  }

  postProdui(add:NgForm){
    let valeur= add.value;
    let data = {libelle :valeur.libelle, code:new Date().getTime()}
    this.http.post("http://localhost:8888/CATEGORIE-SERVICE/Categories/", data)
      .subscribe({
        next:value => {
          this.fetchProduits();

        },
        error:err => {
          console.log(err)
        }
      })
  }
  updateProduit(upd: NgForm): void {

    let valeur = upd.value;
    if(valeur.libelle==""){
      valeur.libelle=this.pr.libelle;
    }
  
    
    let ce= {code :this.pr.code, libelle:this.test.libelle };
console.log(ce)
    this.http.put(`http://localhost:8888/CATEGORIE-SERVICE/Categories/${this.pr.id}`, ce)
      .subscribe({
        next: (value: any) => {
          this.fetchProduits(); //
              alert("update successful");

        },
        error: (err: any) => {
          console.log(err);

        }
      });
  }
  prendre(pro:Category){
    this.pr = pro;
    this.test.libelle = pro.libelle
  }

}
