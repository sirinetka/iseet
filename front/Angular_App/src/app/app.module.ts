import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';
import { VenteComponent } from './vente/vente.component';
import {HomeComponent} from "./home/home.component";
import {FactureComponent} from "./facture/facture.component"
import {CategoryComponent} from './category/CategoryComponent.component'
import {SignInComponent} from "./sign-in/sign-in.component";
import { DevisComponent } from './devis/devis.component';
import { DeviceMangmentComponent } from './device-mangment/device-mangment.component'
import {ReglementFormComponent} from './moduleReglement/reglement/reglement-form.component'
import {ReglementListComponent} from './moduleReglement/reglementList/reglement-list.component'
    

 function initializeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: {
      url: 'http://localhost:8080',
      realm: 'angu-app',
      clientId: 'angular-badr'
    },
    initOptions: {
      onLoad: 'check-sso',
      redirectUri: window.location.origin,
   silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        pkceMethod: 'S256',
        checkLoginIframe: false
        //: false, // Évite des reloads infinis
    },
        enableBearerInterceptor: true,
        bearerExcludedUrls: ['/assets']

  })


}
/*
export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'angu-app',
        clientId: 'angular-badr',
      },
      initOptions: {
        onLoad: 'check-sso', // Remplace 'check-sso'
        checkLoginIframe: false, // Évite des reloads infinis
        pkceMethod: 'S256',
        redirectUri: window.location.origin,
        silentCheckSsoRedirectUri:window.location.origin + '/assets/silent-check-sso.html'
      }
    }).then(() => {
      console.log('✅ Keycloak initialized');
      return true;
    }).catch(err => {
      console.error('❌ Keycloak init failed:', err);
      return false;
    });
}
*/

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
     ClientComponent,
     VenteComponent,
     FactureComponent,
CategoryComponent,
DevisComponent,
DeviceMangmentComponent,
 ReglementFormComponent,
    ReglementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgForOf,
    RouterLink,
    RouterOutlet,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
SignInComponent,
    CommonModule,
  ],


  /*providers: [
    {provide: APP_INITIALIZER, deps : [KeycloakService],useFactory : initializeKeycloak, multi : true}
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
