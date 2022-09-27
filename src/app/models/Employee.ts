import {EtatCivil} from "../enums/EtatCivil";
import {Fonction} from "./Fonction";
import {Absence} from "./Absence";


export class Employee {
  id:number;
  cin : string;
  nom : string;
  prenom : string ;
  dateNaissance : Date;
  lieuNaissance: string;
  adresse : string;
  nationalite : string;
  etatCivil : EtatCivil;
  numTel:string;
  salaire:number;
  email:string;
  fonction : Fonction ;
  photo:string;
  absences : Absence[];


  constructor(id: number) {
    this.id = id;
  }


}
