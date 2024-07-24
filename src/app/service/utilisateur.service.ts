import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor() { }

  private http=inject(HttpClient);

  readonly url=environment.apiUrl;

  
  
  getUtilisateurs() {
    return this.http.get(this.url+ "utilisateurs?page=0&size=20");
  } 

  deleteUtilisateurs(id: any) {
    return this.http.delete(this.url+ "utilisateurs/" + id);
  }

  addUtilisateur(utilisateur: { id: number; nom: string; email: string; numTelephone: string; departement: string }) {
    return this.http.post(this.url+ "utilisateurs", utilisateur );

  }


  

}
