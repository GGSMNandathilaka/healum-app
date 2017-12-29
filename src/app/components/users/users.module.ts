import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersService} from "../../services/users.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatDialogModule} from "@angular/material";
import {AddNewUserModule} from "../forms/add-new-user/add-new-user.module";
import {AddNewUserComponent} from "../forms/add-new-user/add-new-user.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    AddNewUserModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [
    UsersService
  ],
  entryComponents: [
    AddNewUserComponent
  ]
})
export class UsersModule {
}
