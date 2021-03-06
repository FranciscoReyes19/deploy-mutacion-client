import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {global} from './global';

@Injectable()
export class UserService {
	public url:string;
	public identity;
	public token;
	
	constructor(
		public _http:HttpClient
		){
		this.url = global.url;
    }

	register(user):Observable<any>{
		let json = JSON.stringify(user);
		let params = ''+json;

		let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'auth/signup',params,{headers});

	}

	signup(user, gettoken = null):Observable<any>{
		if(gettoken != null){
			user.gettoken = 'true';
		}
		
		let json = JSON.stringify(user);
		//let params = 'json='+json;
		let params = ''+json;
		//let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
		let headers = new HttpHeaders().set('Content-Type','application/json');
		
		return this._http.post(this.url+'auth/signin',params,{headers:headers});
	}

	getToken(){
		let token = localStorage.getItem('token');
		if (token != "undefined") {
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}
}
