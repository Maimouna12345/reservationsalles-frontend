import { Component, OnInit, inject } from '@angular/core';
import { SalleService } from '../service/salle.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit {


  
loginService= inject(LoginService);

showBtnReserved: boolean =false;

dateHeureDebut:  any;
dateHeureFin: any;
sallesAvailable: any;
  

reserverSalle(arg0: any) {

    alert("Reservation succesfully !");
    this.showBtnReserved=false;
    this.getSalles();
}


/*   constructor(salleService: SalleService){
    
  } */

  private router = inject(Router)
  private salleService = inject(SalleService);


  public salles: any;



  ngOnInit() {
    this.getSalles();
  } 

  getSalles(){
    this.salleService.getSalles().subscribe({
      next: data =>{
        console.log(data);
        this.salles = data;
      },
      error: err=>{
        console.log(err);
      }
    });
  }



  
  deleteSalles(id: any) {
    let response = confirm('Voulez-vous vraiment supprimer cette salle ? ');
      if(response){ 
         this.salleService.deleteSalles(id).subscribe({
           next: result =>{
             alert("Salle supprimer avec succes !!!");
             console.log('Supprimer avec succes');
               this.getSalles();
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
  
 ajouterSalle() {
  this.router.navigateByUrl('home/ajouter-salle');
}


  searchSalle() {
    this.showBtnReserved=true;

   const  filteredDateTime= {
      dateHeureDebut : this.dateHeureDebut,
      dateHeureFin : this.dateHeureFin
    }
    this.salleService.researchAllAvailableSalles(filteredDateTime).subscribe({
      next: data =>{
        console.log(data);
        this.sallesAvailable=data;
        console.log(this.sallesAvailable);
        
        this.router.navigateByUrl('salles');
       
      
      },
      error: err=>{        
        console.log(err);
      }
    });
  }
  

}
