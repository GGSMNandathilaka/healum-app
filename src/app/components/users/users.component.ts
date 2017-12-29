import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user";
import {FormControl} from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddNewUserComponent} from "../forms/add-new-user/add-new-user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  nameCtrl: FormControl;
  filteredArr: User[] = [];

  constructor(private userService: UsersService,
              public dialog: MatDialog) {
  }

  ngOnInit() {

    this.userService.usersSubject.subscribe(data => {
      if (data) {
        this.users = data;
        this.filteredArr = this.users;
      }
    });

    this.nameCtrl = new FormControl();
    this.nameCtrl.valueChanges.subscribe(v => {
      this.filteredArr = this.filterArr(v);
    })
  }

  filterArr(val: string): User[] {
    if (this.users && this.users.length > 0 && val && val !== undefined) {
      return this.users.filter(user => {
        return user.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
    } else {
      return this.users;
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddNewUserComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
