import { Component,OnInit,DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import {global} from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'ADN Detector';
  public token;
  public url:string;


  constructor(
    private _userService: UserService,
    ){
    this.url = global.url;
  	this.loadUser();
  }

  ngOnInit(){
    console.log('Webapp cargada correctamente :)');
    
  }

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.token = this._userService.getToken();
  }
}
