import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_url } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  Login(username : string, password : string) : Observable<any>
  {
    let url = base_url + "/login";
    const httpOptions =
    {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json'
        })
    };

    let data = JSON.stringify({
      username : username,
      password : password,
    });
    return this.http.post(url, data, httpOptions);
  }

    GetArticles(token : string) : Observable<any>
    {
      let url = base_url + "/AvoirArticles";
      const httpOptions =
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           Authorization: 'Bearer ' + token,
          })
      };
      return this.http.get(url, httpOptions);
    }

    DeleteArticle(token : string, id : number) : Observable<any>
    {
      let url = base_url + "/EffacerArticle?idArticle=" + id;
      const httpOptions =
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           Authorization: 'Bearer ' + token,
          })
      };
      return this.http.get(url, httpOptions);
    }

    PosterArticel(token : string, titre : string, auteur : string, date : string, description : string, objet : string, base64 : string) : Observable<any>
    {
      let url = base_url + "/AjouterArticle";
      const httpOptions =
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           Authorization: 'Bearer ' + token,
          })
      };

      let data = JSON.stringify({
        titre : titre,
        auteur : auteur,
        date : date,
        description : description,
        objet : objet,
        base64 : base64
      });
      return this.http.post(url, data, httpOptions);
    }
}
