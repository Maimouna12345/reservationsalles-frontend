import { Component, OnInit, inject } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit {
  
ajouterUtilisateurs() {
throw new Error('Method not implemented.');
}
deleteUtilisateur(arg0: any) {
throw new Error('Method not implemented.');
}
supprimerUtilisateur() {
throw new Error('Method not implemented.');
}

  private utilisateurService = inject(UtilisateurService);
  private router = inject(Router)

  public utilisateurs: any;

  

  ngOnInit() {
    this.getUtilisateurs();
    
  } 
  
  getUtilisateurs(){
    this.utilisateurService.getUtilisateurs().subscribe({
       next: data =>{
       console.log(data);
       this.utilisateurs = data;
        },
        error: err=>{
          console.log(err);
        }
    });
  }
  
  deleteUtilisateurs(id: any) {
    let response = confirm('Voulez-vous vraiment supprimer cet utilisateur ? ');
      if(response){ 
        console.log(id)
         this.utilisateurService.deleteUtilisateurs(id).subscribe({
           next: result =>{
             alert("Utilisateur supprimer avec succes !!!");
             console.log('Supprimer avec succes');
               this.getUtilisateurs();
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


  ajouterUtilisateur() {
    this.router.navigateByUrl('home/ajouter-utilisateur');
}

}



