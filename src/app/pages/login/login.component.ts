import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../enums/Role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInvalid: boolean;
  isLogout: boolean;
  submitted = false;
  model: any = {
    username: 'najib@gmail.com',
    password: '1234',
    remembered: true
  };

  returnUrl: string | null = '/';

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let params = this.route.snapshot.queryParamMap;
    this.isLogout = params.has('logout');
    this.returnUrl = params.get('returnUrl');
  }

  onSubmit() {
    this.submitted = true;
    this.userService.login(this.model).subscribe(
      user => {
        if (user) {
            this.returnUrl = 'employees';
            this.router.navigateByUrl(this.returnUrl);
        } else {
          this.isLogout = false;
          this.isInvalid = true;
        }

      }
    );
  }

}
