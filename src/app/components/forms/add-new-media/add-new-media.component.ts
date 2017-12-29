import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.css']
})
export class AddNewMediaComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public uploader: FileUploader = new FileUploader({url: ''});

  constructor(public dialogRef: MatDialogRef<AddNewMediaComponent>,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required],
      descriptionCtrl: '',
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  onFirstNext() {
    console.log('first-form-group:', this.firstFormGroup.getRawValue());
  }

}
