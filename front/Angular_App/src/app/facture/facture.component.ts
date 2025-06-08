import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {Facture} from "../Modele/Facture";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrl: './facture.component.css'
})
export class FactureComponent {
  ventes: any;
  vn!: Facture
  clients: any
  produits: any


  test = {
    tel: "",
    code: "",
    adresse: "",
 matfisc: "",
  prix: "",
  email:""
  }

  constructor(private http: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
    this.fetchVentes();

  }

  fetchVentes(): void {
    this.http.get("http://localhost:8888/FACTURE-SERVICE/Factures")
      .subscribe({
        next: data => {

          this.ventes = data
        },
        error: err => {
          console.log(err);
        }
      })


  }

  supprimerVente(vente: Facture) {
    this.http.delete(`http://localhost:8888/FACTURE-SERVICE/Factures/${vente.id}`)
      .subscribe({
        next: value => {
          this.fetchVentes();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }

  confirmerSupp(vente: Facture) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette vente ?')) {
      this.supprimerVente(vente);
    } else {
      console.log('Suppression annulée.');
    }
  }

  upgrade(){

  }

  postVente(add: NgForm) {

    let valeur = add.value;
    let data = { tel: this.test.tel,email:this.test.email, code: this.test.code,adresse: this.test.adresse, matfisc: this.test.matfisc,prix:this.test.prix };
console.log(data);
console.log(valeur);

    this.http.post("http://localhost:8888/FACTURE-SERVICE/Factures", data)
      .subscribe({
        next: (value: any) => {
          this.fetchVentes()
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }

  
  UpdateVente(add: NgForm) {
    alert('Vente met à jour avec succes');
    let valeur = add.value;


    let vnUp = {

        tel: valeur.tel,
    code: valeur.code,
    adresse: valeur.adresse,
 matfisc: valeur.matfisc,
  prix: valeur.prix,
  email:valeur.email

    }
    this.http.put(`http://localhost:8888/FACTURE-SERVICE/Factures/${this.vn.id}`, vnUp)
      .subscribe({
        next:value => {
          this.fetchVentes();

        },
        error:err => {
          console.log(err)
        }
      })
  }

  prendre(cli:any){
    this.vn = cli;
    this.test = cli;
  }

}
