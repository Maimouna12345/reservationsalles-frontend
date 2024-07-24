import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AgenceService } from '../service/agence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-agence',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './ajouter-agence.component.html',
  styleUrl: './ajouter-agence.component.css'
})
export class AjouterAgenceComponent {

  private router = inject(Router);
  
  private agenceService = inject(AgenceService);


    id: number = 0;
    nom: string ='';
    adresse: string ='';
    codePostal: string ='';
  


    ajouterAgence() {
    console.log(this.id, this.nom, this.adresse, this.codePostal);
    let agence = {
      id: this.id,
      nom: this.nom, 
      adresse : this.adresse,
        codePostal : this.codePostal
      }
    this.agenceService.addAgence(agence).subscribe({
      next: data =>{
        console.log(data);
        alert("Ajout successfully ! ");
        this.router.navigateByUrl('home/agence');
      
      },
      error: err=>{
        console.log(err);
      }
    });
    }
     
}
