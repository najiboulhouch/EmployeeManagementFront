import {EtatCivil} from "../enums/EtatCivil";
import {Fonction} from "./Fonction";
import {Employee} from "./Employee";
import {TypeAbsence} from "../enums/TypeAbsence";


export class Payment {
  id:number;
  datePayment : string | null;
  salaire : number;
  employee : Employee ;
}
