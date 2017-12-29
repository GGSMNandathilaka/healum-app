import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewMediaComponent } from './add-new-media.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule} from "@angular/material";
import {FileUploadModule} from "ng2-file-upload";

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
    FileUploadModule
  ],
  declarations: [AddNewMediaComponent],
  exports: [AddNewMediaComponent]
})
export class AddNewMediaModule { }
