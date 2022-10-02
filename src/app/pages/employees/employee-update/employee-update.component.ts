import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";
import {Fonction} from "../../../models/Fonction";
import {FonctionService} from "../../../services/fonction.service";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  // @ts-ignore
  id: number;
  // @ts-ignore
  employee: Employee = new Employee();
  submitted  = false;
  fonctions?: Fonction[];
  selectedFonctions : number;
  messageError : string;
  selectedFiles : any;
  progress: number;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private fonctionService : FonctionService,
              private employeeService:EmployeeService) { }



  ngOnInit(): void {
    this.reloadAllFonctions();
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe({
        next : (data) => {
        this.employee = data ;
        console.log(this.employee)
      },
      error:(error) =>
        console.log(error),
    });
  }

  onSubmit(){
    this.updateEmployee();
  }

  goToList(){
    this.router.navigate(['/employees'])
  }

  public updateEmployee() {
    let fonction = new Fonction(this.selectedFonctions);

    this.employee.fonction = fonction;
    console.log(this.employee)
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe({
        next: (data) => {
          this.submitted = true;
        }, error : error => {
          this.messageError = error.error ; this.submitted = false; }
      });
  }

  reloadAllFonctions() : void {
    this.fonctionService.getAllFonctionsForSelect().subscribe({
      next : (data) => {
        this.fonctions = data ;
      },
      error:(e) => console.error(e),
    });
  }
}
