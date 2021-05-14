import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LocalStorageService } from '../services/local-storage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  titre : string;
  auteur : string;
  date : string;
  description : string;
  objet : string;
  base64 : string;

  constructor(private storage : LocalStorageService, private route : Router, private service : AdminService) { }

  ngOnInit(): void {
  }

  toBase64(event)
  {
    const file = event.target.files[0];
    const reader = new FileReader();
    if(file != null)
    {
      reader.readAsDataURL(file);
      reader.onload = () => {
          let base64V = (reader.result).toString().split(",")[1];
          this.base64 = base64V;
      };
    }
  }

  PosterArticel()
  {
    this.AfficherLoad();
    if((this.titre != null && this.titre != "")&&(this.auteur != null && this.auteur != "")&&(this.date != null && this.date != "")&&(this.description != null && this.description != "")&&(this.objet != null && this.objet != "")&&(this.base64 != null && this.base64 != "")){
      this.service.PosterArticel(this.storage.getToken(), this.titre, this.auteur, this.date, this.description, this.objet, this.base64).subscribe(
        (response)=>{
          if(response["status"] == "success")
          {
            this.ArrterLoad();
            this.AfficherMessage("alert alert-success", "article publier avec succees")
          }
        },
        (error)=>{
          this.ArrterLoad();
          this.AfficherMessage("alert alert-danger", "erreur du serveur");
        }
      );
    }
    else
    {
      this.ArrterLoad();
      this.AfficherMessage("alert alert-danger", "champs non remplis correctement");
    }
  }

  AfficherMessage(alertType : string, message : string)
  {
    $("#message").removeClass();
    $("#message").addClass(alertType);
    $("#message").html(message);
    $("#message").css("display", "block");
  }

  AfficherLoad()
  {
    $("#mybutton").css("display", "none");
    $("#load").css("display", "block");
  }

  ArrterLoad()
  {
    $("#mybutton").css("display", "block");
    $("#load").css("display", "none");
  }
}
