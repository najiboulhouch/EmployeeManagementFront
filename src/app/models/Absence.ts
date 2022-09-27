import {EtatCivil} from "../enums/EtatCivil";
import {Fonction} from "./Fonction";
import {Employee} from "./Employee";
import {TypeAbsence} from "../enums/TypeAbsence";


export class Absence {
  id:number;
  dateDebut : string;
  dateFin : string;
  justifie : boolean ;
  justification : string;
  typeAbsence : TypeAbsence;
  employee : Employee ;
  employeeId : number;
}
