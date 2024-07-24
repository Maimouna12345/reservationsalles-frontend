import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
 
  
  constructor() { }
  private http = inject(HttpClient);

  readonly url = environment.apiUrl  ;
 // agences = signal<Agence[]>([]) ;
  
  /* getAgences() : Observable<Agence[]>{
    return this.http.get<Agence[]>(this.url).pipe(
      tap(agences => this.agences.set(agences))
    ) 
  }  */

  getAgences() {
    return this.http.get(this.url+ "agences?page=0&size=20");
  } 

  deleteAgences(id: any) {
    return this.http.delete(this.url+ "agences/" + id);
  }

  addAgence(agence: { id: number; nom: string; adresse: string; codePostal: string; }) {
    return this.http.post(this.url+ "agences", agence );
    //S

  }


}


