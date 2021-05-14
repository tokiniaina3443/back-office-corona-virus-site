import { Illustration } from './Illustration.class';
export class Article
{
  id : number;
  titre : string;
  auteur : string;
  date : string;
  description : string;
  illustration : Illustration;
  objet : string;

  constructor(titre : string, auteur : string, date : string, description : string, illustration : Illustration, objet : string, id : number = 0)
  {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.date = date;
    this.description = description;
    this.illustration = illustration;
    this.objet = objet;
  }
}
