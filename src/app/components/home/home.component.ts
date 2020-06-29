import { Component, OnInit } from '@angular/core';
import { Adn } from '../../models/adn';
import { AdnService } from '../../services/adn.service';
import { global } from '../../services/global';
import { UserService } from '../../services/user.service';
import { HttpResponseBase } from '@angular/common/http';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdnService, UserService]
})
export class HomeComponent implements OnInit {
  public page_title:string;
  public url;
  public expedientes: Array<Adn>;
  public token;
  public count_no_mutation;
  public count_mutations;

  constructor(
  	private _adnService: AdnService,
    ) { 
      this.page_title = 'ADN Detector';
      this.url = global.url;
    }

  ngOnInit() {
  this.getExpedientes();
  }
  
  getStats(){
    this._adnService.getStats().subscribe(
      response => {
        if (response.status == 'success') {
          this.count_mutations = response.count_mutations;
          this.count_no_mutation = response.count_no_mutation;
          console.log(response);
  			}
  		},
  		error => {
  			console.log(error);

  		});
  
  }
  getExpedientes(){
    this._adnService.getExpedientes().subscribe(
      response => {
        if (response.expedientes != null) {
          this.expedientes = response.expedientes;
          console.log(response);
  			}
  		},
  		error => {
  			console.log(error);

  		});

  }
  getWithMutation(){
    let hasMutation = true;    
    this._adnService.getExpedientesByMutation(hasMutation).subscribe(
      response => {
        if (response.expedientes != null) {
          this.expedientes = response.expedientes;
          console.log(response);
  			}
  		},
  		error => {
  			console.log(error);

  		});
  }
  getWithoutMutation(){
    let hasMutation = false;    
    this._adnService.getExpedientesByMutation(hasMutation).subscribe(
      response => {
        if (response.expedientes != null) {
          this.expedientes = response.expedientes;
          console.log(response);
  			}
  		},
  		error => {
  			console.log(error);

  		});
  }
}
