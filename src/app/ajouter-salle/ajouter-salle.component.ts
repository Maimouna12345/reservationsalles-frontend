import { Component, inject } from '@angular/core';
import { SalleService } from '../service/salle.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-salle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-salle.component.html',
  styleUrl: './ajouter-salle.component.css'
})
export class AjouterSalleComponent {
  




  private salleService = inject(SalleService);

  private router = inject(Router);








  
  id: number = 0;
  nom: string ='';
  capacite : string ='';
  salleForm: any;
  



  ajouterSalle() {
  console.log(this.id, this.nom, this.capacite);
  let salle = {
    id: this.id,
    nom: this.nom, 
    capacite : this.capacite,
    }
  this.salleService.addSalle(salle).subscribe({
    next: data =>{
      console.log(data);
      alert("Ajout successfully ! ");
      this.router.navigateByUrl('salles');
    
    },
    error: err=>{        
      console.log(err);
    }
  });
  }
   

}
