import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute

  	) { 
      this.page_title = 'Identificate';
      this.user = new User(1,'','','','','');
  }
  
  ngOnInit() {
  	//ESTO SE EJECUTA SIEMPRE Y CIERRA SESION SOLO CUANDO LE LLEGA EL PARAMETRO SURE POR LA URL
  	this.logout();
  }

  onSubmit(form){
  	 this._userService.signup(this.user).subscribe(
  	 	response => {
			   // TOKEN
  	 		if (response.accessToken != null) {
  	 			this.status = 'success';
  	 			this.token = response.accessToken;
						   
				   localStorage.setItem('token',this.token)
			  	   //localStorage.setItem('identity',JSON.stringify(this.identity));

				   this._router.navigate(['home']);
			   }
  	 	},
  	 	error => {
  	 		this.status = 'error';
  	 		console.log(<any>error);
  	 	}
  	 	);
  }

  logout(){
  	this._route.params.subscribe(
  		params => {
  			let logout = +params['sure'];

  			if (logout == 1) {
  				localStorage.removeItem('token');
				this.token = null;

  				//REDIRECCION A INICIO
  				this._router.navigate(['login']);
  			}

  		});
  }


}
