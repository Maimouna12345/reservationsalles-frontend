import { Component, OnInit, inject } from '@angular/core';
import { AgenceService } from '../service/agence.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agence',
  standalone: true,
  imports: [CommonModule,JsonPipe],
  templateUrl: './agence.component.html',
  styleUrl: './agence.component.css'
})
export class AgenceComponent implements OnInit {

  private router = inject(Router);



  private agenceService = inject(AgenceService);
 
 /* agences = this.agenceService.agences;
   ngOnInit() {
      this.agenceService.getAgences().subscribe();
    } */

   
  public agences: any;

   ngOnInit() {
    this.getAgences();
  } 

    getAgences(){
      this.agenceService.getAgences().subscribe({
        next: data =>{
          console.log(data);
          this.agences = data;
        },
        error: err=>{
          console.log(err);
        }
      });
    }

  
      deleteAgence(id: any) {
       let response = confirm('Voulez-vous vraiment supprimer cette agence ? ');
         if(response){ 
            this.agenceService.deleteAgences(id).subscribe({
              next: result =>{
                alert("Agence supprimer avec succes !!!");
                console.log('Supprimer avec succes');
                  this.getAgences();
              },
              error: err=>{
                console.log(err);
              }
            });
         }
         else{
          alert("Suppresion annuler !")
            console.log("Suppression annuler !");
         }
    }


    ajouterAgence() {
        this.router.navigateByUrl('home/ajouter-agence');
    }
}
