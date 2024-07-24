import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


    
  constructor() { }
  private http = inject(HttpClient);

  readonly url = environment.apiUrl  ;
 

  getReservations() {
    return this.http.get(this.url+ "reservations?page=0&size=20");
  } 

  annulerReservation(id: any) {
    return this.http.delete(this.url+ "reservations/" + id);
  }

  addReservation(reservation: { id: number; nom: string; adresse: string; codePostal: string; }) {
    return this.http.post(this.url+ "reservations", reservation );
  
  }

  
  updateReservation(reservation: { id: number; nom: string; adresse: string; codePostal: string; }) {
    return this.http.post(this.url+ "reservations", reservation );
  }
}
