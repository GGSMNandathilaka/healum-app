import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddNewUserComponent} from './add-new-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatRadioModule,
  MatStepperModule
} from "@angular/material";
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FileUploadModule
  ],
  declarations: [AddNewUserComponent],
  exports: [AddNewUserComponent]
})
export class AddNewUserModule {
}
