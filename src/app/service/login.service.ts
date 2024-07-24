import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public rolesName: any;
  
 

  // http://localhost:8080/utilisateurs/search/findUtilisateurByEmailAndPassword?email=mounassendao1%40gmail.com&password=12345  

   http=inject(HttpClient);
  readonly url= environment.apiUrl;

  authentification( email: string, motdepasse: string,) {
    //return this.http.get(this.url+ "utilisateurs/search/findUtilisateurByEmailAndPassword?email="+email+"&password="+motdepasse );
    return this.http.get(`${this.url}utilisateurs/search/findUtilisateurByEmailAndPassword?email=${email}&password=${motdepasse}` );
  }
  
    getRoles(urlRoles: string) {
      return this.http.get(urlRoles);
    } 

}


