import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {CategoryComponent} from './category/CategoryComponent.component'
import {ProduitComponent} from "./produit/produit.component";
import {ClientComponent} from "./client/client.component";
import {VenteComponent} from "./vente/vente.component";
import {FactureComponent} from "./facture/facture.component"

import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component"
import {DevisComponent} from "./devis/devis.component"
import {DeviceMangmentComponent} from "./device-mangment/device-mangment.component"

import {ReglementFormComponent} from './moduleReglement/reglement/reglement-form.component'
import {ReglementListComponent} from './moduleReglement/reglementList/reglement-list.component'

const routes: Routes = [
    { path : "category", component : CategoryComponent},
  { path : "produits", component : ProduitComponent},
  { path : "clients", component : ClientComponent,},
  { path : "ventes", component : VenteComponent },
  { path : "facture", component : FactureComponent },
   { path : "devis", component :   DevisComponent },
  { path: 'devisesmanage', component: DeviceMangmentComponent },
   { path : "reglement", component :   ReglementFormComponent },
  { path: 'reglementliste', component: ReglementListComponent },
  { path : "home", component : HomeComponent },

  { path : "login", component : SignInComponent },
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
