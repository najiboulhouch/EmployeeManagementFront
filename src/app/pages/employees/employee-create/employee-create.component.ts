import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/Employee";
import {EmployeeService} from "../../../services/employee.service";
import {Router} from "@angular/router";
import {FonctionService} from "../../../services/fonction.service";
import {Fonction} from "../../../models/Fonction";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Contrat} from "../../../models/Contrat";
import {ContratService} from "../../../services/contrat.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee:Employee = new Employee();
  submitted  = false;
  fonctions?: Fonction[];
  selectedFonctions : number;
  messageError : string;
  progress: number;
  contrat :Contrat = new Contrat();

  constructor(private employeeService : EmployeeService,private fonctionService : FonctionService,
              private router:Router , private contratService : ContratService) { }

  ngOnInit(): void {
    this.reloadAllFonctions();
  }

  reloadAllFonctions() : void {
    this.fonctionService.getAllFonctionsForSelect().subscribe({
      next : (data) => {
        this.fonctions = data ;
      },
      error:(e) => console.error(e),
    });
  }

  save(){
    let fonction = new Fonction(this.selectedFonctions);
    this.employee.fonction = fonction;
    this.employeeService.createEmployee(this.employee).subscribe({next : ( data ) => {
          this.employee = data;
          this.messageError = "";
        this.saveContrat();
        } , error : error => {
      this.messageError = error.error ; this.submitted = false; }} );
  };

  saveContrat(){
    this.contrat.employee = this.employee;
    this.contratService.createContrat(this.contrat).subscribe({
      next : (data) => {
        this.contrat = data ;
        this.submitted = true;
      }
    })

  }

  onSubmit(){
    this.save();

  }

  goToList(){
    this.router.navigate(['/employees']);
  }





}
