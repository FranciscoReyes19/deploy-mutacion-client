import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adn} from '../models/adn';
import {global} from './global';

@Injectable()
export class AdnService {
    public url:string;
    public shorturl:string;
	
	constructor(
		private _http:HttpClient
		){
        this.url = global.url;
        this.shorturl = global.shorturl;
    }

    create(token, adn): Observable<any>{
    	//remplazar html entities to UTF-8 >>INICIO
        adn.content = global.htmlEntities(adn.content);
        //remplazar html entities to UTF-8 >>FIN
        let json = JSON.stringify(adn);
    	let params = ""+json;
    	let headers = new HttpHeaders().set('Content-Type','application/json')
    	                               .set('Authorization',token);

       return this._http.post(this.shorturl+'mutation',params,{headers: headers});

    }
    getExpedientes(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.shorturl+'mutation',{headers:headers});

    }

    getExpedientesByMutation(hasMutation): Observable<any>{
        console.log(hasMutation);
        let params = '{"hasMutation":'+hasMutation+'}';
        //let params = JSON.parse(has);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.shorturl+'mutationby',params,{headers:headers});

    }
    getStats(): Observable<any>{
        return this._http.get(this.shorturl+'stats');
    }
}