import { LocalStorageService } from './../services/local-storage.service';
import { AdminService } from './../services/admin.service';
import { base_url } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username : string = "";
  @Input() password : string = "";

  constructor(private route : Router, private service : AdminService, private storage : LocalStorageService) { }

  ngOnInit(): void {
  }

  Login()
  {
    const onSucces = (response : any) =>{
        if(response["status"] == "success"){
          this.AfficherLoad("none");
          this.storage.setToken(response["data"]);
          this.route.navigateByUrl("/liste");
        }
    }
    const onError= (response :any) =>{
      this.AfficherLoad("none");
      this.AfficherMessage(response["error"]);
    }
    try{
      this.AfficherLoad("block");
      this.service.Login(this.username, this.password).subscribe(onSucces,onError);
    }
    catch (error){
      console.log( "catch: " + error);
    }
  }

  AfficherLoad(value : string)
  {
    $("#spinner").css("display", value);
  }

  AfficherMessage(message : string)
  {
    $("#errorMessage").html(message);
    $("#errorMessage").css("display","block");
  }
}
