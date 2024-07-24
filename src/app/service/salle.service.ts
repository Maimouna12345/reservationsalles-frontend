import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
 
  addSalles(salle: { id: number; nom: string; capacite: number; }) {
    throw new Error('Method not implemented.');
  }
  
  constructor() { }

  private http=inject(HttpClient);

  readonly url= environment.apiUrl;



  getSalles() {
    return this.http.get(this.url+ "salles?page=0&size=20");
  } 

  deleteSalles(id: any) {
    return this.http.delete(this.url+ "salles/" + id);
  }
  
  addSalle(salle: { id: number; nom: string; capacite: string; }) {
    return this.http.post(this.url+ "salles", salle );
  }

  researchAllAvailableSalles(filteredDateTime: { dateHeureDebut: any; dateHeureFin: any; }) {
    http://localhost:8080/salles/search/findAvailableSalles?dateHeureDebut=2024-07-19T15%3A00%3A00&dateHeureFin=2024-07-19T16%3A00%3A00'
    return this.http.get(this.url+ "salles/search/findAvailableSalles?dateHeureDebut=" + filteredDateTime.dateHeureDebut + "&dateHeureFin=" + filteredDateTime.dateHeureFin);
  }
  



}
