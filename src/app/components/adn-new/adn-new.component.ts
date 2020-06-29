import { Component, OnInit } from '@angular/core';
import { AdnService} from '../../services/adn.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Adn } from 'src/app/models/adn';

@Component({
  selector: 'adn-new',
  templateUrl: './adn-new.component.html',
  styleUrls: ['./adn-new.component.css'],
  providers: [AdnService]
})
export class AdnNewComponent implements OnInit {
  public adn_model:Adn;
  public status: string;
  public token;
  public identity;

  constructor(
    private _adnService: AdnService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
      this.adn_model = new Adn(1,'','',false,'');
  }

  ngOnInit() {
  }
  onSubmit(form){
    //Parameters to generate random ADN
    let size = 36;
    let characters = 'ATCG';
    
    //Setting ADN model
    this.token = localStorage.getItem('token');
    this.adn_model.adn = this.generateAdn(size, characters);
    console.log(this.adn_model);
    //Calling adn service to execute create operation
    this._adnService.create(this.token,this.adn_model).subscribe(
     response => {
        // TOKEN
        if (response.success) {
          console.log(response);
          this.status = 'success';
          this._router.navigate(['home']);
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
      );
 }
 //Algoritm to generate random string with specific lenght anf characters
 //Parameter len: size of string required
 //Parameter arr: specific characters included into String result
  generateAdn(len,arr){
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans += 
        arr[Math.floor(Math.random() * arr.length)]; 
    } 
  return ans; 
  } 

}
