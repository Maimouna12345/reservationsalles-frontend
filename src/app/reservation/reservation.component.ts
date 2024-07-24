import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  private router = inject(Router);



  private reservationService = inject(ReservationService);
 
 /* agences = this.reservationService.agences;
   ngOnInit() {
      this.reservationService.getAgences().subscribe();
    } */

   
  public reservations: any;

   ngOnInit() {
    this.getReservations();
  } 

    getReservations(){
      this.reservationService.getReservations().subscribe({
        next: data =>{
          console.log(data);
          this.reservations = data;
        },
        error: err=>{
          console.log(err);
        }
      });
    }

  
      annulerReservation(id: any) {
       let response = confirm('Voulez-vous vraiment supprimer cette reservation ? ');
         if(response){ 
            this.reservationService.annulerReservation(id).subscribe({
              next: result =>{
                alert("Reservation supprimer avec succes !!!");
                console.log('Supprimer avec succes');
                  this.getReservations();
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
  

   

}
