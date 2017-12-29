import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Module1Component} from './module1.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material";
import {AddNewMediaModule} from "../forms/add-new-media/add-new-media.module";
import {AddNewMediaComponent} from "../forms/add-new-media/add-new-media.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AddNewMediaModule
  ],
  declarations: [Module1Component],
  exports: [Module1Component],
  entryComponents: [AddNewMediaComponent]
})
export class Module1Module {

}
