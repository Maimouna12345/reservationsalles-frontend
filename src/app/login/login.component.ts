import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router = inject(Router)
  private loginService = inject(LoginService)

    

  
  email: string ='';
  motdepasse: string ='';
  
  authentificationService: any;
  urlRoles: string= "";
  resultats: any;


  
    authentification() {
    
    console.log( this.email, this.motdepasse,);

        this.loginService.authentification(this.email, this.motdepasse).subscribe({
          next: (data: any) =>{
            console.log(data);
            this.urlRoles= data._links.roles.href
            console.log("----------------------",  data._links.roles.href);
            console.log("***********************",this.urlRoles);
           // this.router.navigateByUrl('home');
          },
          error: (err: any)=>{
            alert("login ou mot de passe Incorrect ! ");
            console.log(err);
            this.router.navigateByUrl('login');
          },
          complete:()=>{
               this.loginService.getRoles(this.urlRoles).subscribe({
                  next : response=>{
                    this.resultats= response;
                    console.log(this.resultats);
                    this.loginService.rolesName = this.resultats._embedded.roles.map((role:any) => role.nom);
                    console.log(this.loginService.rolesName );
                    this.router.navigateByUrl('home');

                  },
                  error: error=>{
                    console.log(error.message);
                    
                  }
               });
          }
          
        });
      }
    
   
  
         





}
