import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UsersService {

  users: User[] = [];
  usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: Http) {
  }

  getUsers() {

    this.http.get(environment.firebaseUrl)
      .map((res) => res.json())
      .subscribe(u => {
        if (JSON.stringify(u) !== JSON.stringify([])) {
          this.users = u;
          this.usersSubject.next(this.users);
        }
      });
  }

}
