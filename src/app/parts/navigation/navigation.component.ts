import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JwtResponse} from "../../response/JwtResponse";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {Role} from "../../enums/Role";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUserSubscription: Subscription;
  name$: any;
  name: string;
  currentUser: JwtResponse;
  root = '/';
  Role = Role;

  constructor(private userService: UserService) {}


  ngOnInit() {
    this.name$ = this.userService.name$.subscribe(aName => this.name = aName);
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
        this.root = '/employees';
    });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.userService.logout();
  }


}
