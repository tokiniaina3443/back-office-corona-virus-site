import { Router } from '@angular/router';
import { AdminService } from './../services/admin.service';
import { Article } from './../class/Article.class';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  articles : Article [] = [];
  constructor(private storage : LocalStorageService, private route : Router, private service : AdminService) { }

  ngOnInit(): void {
    this.articles = [];
    if(this.EstConnecter())
    {
      this.ObtenierArticle();
    }
    else
    {
      this.route.navigateByUrl("");
    }
  }

  EstConnecter()
  {
    if(this.storage.getToken() == null)
    {
      return false
    }
    else{
      return true;
    }
  }

  ObtenierArticle()
  {
    this.articles = [];
    this.service.GetArticles(this.storage.getToken()).subscribe(
      (response)=>{
        if(response["status"] == "success")
        {
          let index = 0;
          response["data"].forEach(articleTemp => {
            this.articles[index] = articleTemp;
            index++;
          });
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  SupprimerArticle(id : number)
  {
    this.service.DeleteArticle(this.storage.getToken(), id).subscribe(
      (response)=>{
        if(response["status"] == "success"){
          this.ObtenierArticle();
        }
      },
      (error)=>{
        this.AfficherMessage("erreur", error["data"]);
      }
    );
  }

  AfficherMessage(titre : string, message : string)
  {
    $("#titre").text(titre);
    $("#message").text(message);
    $("#modal").click();
  }
}
