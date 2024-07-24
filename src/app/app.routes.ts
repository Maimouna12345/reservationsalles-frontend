import { Routes } from '@angular/router';
import { AgenceComponent } from './agence/agence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterAgenceComponent } from './ajouter-agence/ajouter-agence.component';
import { SalleComponent } from './salle/salle.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ModifierAgenceComponent } from './modifier-agence/modifier-agence.component';
import { AjouterSalleComponent } from './ajouter-salle/ajouter-salle.component';
import { Component } from '@angular/core';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, children  : [
        { path: 'agence', component: AgenceComponent },
        { path: 'ajouter-agence', component: AjouterAgenceComponent },
        { path: 'salle', component: SalleComponent },
        { path: 'reservation', component: ReservationComponent },

        { path: 'utilisateur', component: UtilisateurComponent},
        { path: 'modifier-agence/:id', component: ModifierAgenceComponent},
        { path: 'ajouter-salle', component: AjouterSalleComponent},
        { path: 'ajouter-utilisateur', component: AjouterUtilisateurComponent}
    ]},
    

    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'login', pathMatch:'full'},

    
]
