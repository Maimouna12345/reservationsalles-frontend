import { Component, inject } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-utilisateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrl: './ajouter-utilisateur.component.css'
})
export class AjouterUtilisateurComponent {

utilisateurForm: any;
ajouterUtilisateurs() {
throw new Error('Method not implemented.');
}

  private utilisateurService = inject(UtilisateurService)
  private router = inject(Router)


  




  id: number = 0;
    nom: string ='';
    email: string ='';
    NumTelephone: string ='';
    departement: string ='';
  


    addUtilisateur() {
    console.log(this.id, this.nom, this.email, this.NumTelephone, this.departement);
    let utilisateur = {
      id: this.id,
      nom: this.nom, 
      email : this.email,
      numTelephone : this.NumTelephone,
      departement : this.departement

      }
    this.utilisateurService.addUtilisateur(utilisateur).subscribe({
      next: (data: any) =>{
        console.log(data);
        alert("Ajout successfully ! ");
        this.router.navigateByUrl('home/utilisateur');
      
      },
      error: (err: any)=>{
        console.log(err);
      }
    });
   
  }
     










}
