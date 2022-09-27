import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/Employee";
import {Fonction} from "../../../models/Fonction";
import {ActivatedRoute, Router} from "@angular/router";
import {FonctionService} from "../../../services/fonction.service";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-fonction-update',
  templateUrl: './fonction-update.component.html',
  styleUrls: ['./fonction-update.component.css']
})
export class FonctionUpdateComponent implements OnInit {

// @ts-ignore
  id: number;
  // @ts-ignore
  fonction: Fonction  = new Fonction();
  submitted  = false;
  messageError : string;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private fonctionService : FonctionService) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fonction = new Fonction(this.id);
    this.fonctionService.getFonction(this.id).subscribe({
      next : (data) => {
          this.fonction = data ;
      },
      error:(error) =>
        console.log(error),
    });
  }

  onSubmit(){
    this.updateFonction();
  }

  goToList(){
    this.router.navigate(['/fonctions'])
  }

  public updateFonction() {
    this.fonctionService.updateFonction(this.id, this.fonction)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fonction = new Fonction(0);
          this.goToList();
        }, error: (error) => console.log(error),
      });
  }

}
