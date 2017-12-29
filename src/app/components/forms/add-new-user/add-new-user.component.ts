import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  public uploader: FileUploader = new FileUploader({url: ''});

  constructor(public dialogRef: MatDialogRef<AddNewUserComponent>,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', [Validators.required, Validators.email]],
      dobCtrl: ['', Validators.required],
      genderCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFirstNext() {
    console.log('first-form-group:', this.firstFormGroup.getRawValue());
  }
}
