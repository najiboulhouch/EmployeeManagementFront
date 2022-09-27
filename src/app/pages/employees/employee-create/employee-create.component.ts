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
  employee:Employee = new Employee(0);
  submitted  = false;
  fonctions?: Fonction[];
  selectedFonctions : number;
  messageError : string;
  selectedFiles : any;
  progress: number;
  currentFileUpload: any;
  private currentTime: number;
  contrat :Contrat = new Contrat(0);

  constructor(private employeeService : EmployeeService,private fonctionService : FonctionService,
              private router:Router , private contratService : ContratService) { }

  ngOnInit(): void {
    this.reloadAllFonctions();
  }

  reloadAllFonctions() : void {
    this.fonctionService.getAllFonctionsForSelect().subscribe({
      next : (data) => {
        this.fonctions = data ;
        console.log(data);
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
          this.uploadPhoto();
          this.saveContrat();
        } , error : error => {this.messageError = error.error.message ; this.submitted = false; }} );
  };

  saveContrat(){
    console.log(this.employee)
    this.contrat.employee = this.employee;
    this.contratService.createContrat(this.contrat).subscribe({
      next : (data) => {
        this.contrat = data ;
      }
    })

  }

  onSubmit(){
    this.save();
  }

  goToList(){
    this.router.navigate(['/employees']);
  }

  private uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log(this.currentFileUpload);
    this.employeeService.uploadPhotoEmployee(this.currentFileUpload, this.employee.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // @ts-ignore
        this.progress = Math.round(100 * event.loaded / event.total);
        this.submitted = true ;
      } else if (event instanceof HttpResponse) {
        this.currentTime=Date.now();
      }
    },err=>{
      console.log(err);
      this.submitted = false ;
      alert("Problème de chargement");
    })

    this.selectedFiles = undefined
  }

  onSelectedFile(event : any) {
    console.log(event)
    this.selectedFiles=event.target.files;
  }



}
