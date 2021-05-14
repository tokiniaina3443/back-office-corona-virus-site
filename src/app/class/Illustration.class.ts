export class Illustration
{
  id : number;
  nom : string;
  chemin : string;

  constructor(nom : string, chemin : string, id : number = 0)
  {
    this.id = id;
    this.nom = nom;
    this.chemin = chemin;
  }
}
