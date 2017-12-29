import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MediaService} from "../../services/media.service";
import {Media} from "../../models/media";
import {MatDialog} from "@angular/material";
import {AddNewMediaComponent} from "../forms/add-new-media/add-new-media.component";

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  mediaCtrl: FormControl;
  media: Media[] = [];
  filteredArr: Media[] = [];

  constructor(private mediaService: MediaService,
              public dialog: MatDialog) {
  }

  ngOnInit() {

    this.mediaService.mediaSubject.subscribe(data => {
      if (data) {
        this.media = data;
        this.filteredArr = this.media;
      }
    });

    this.mediaCtrl = new FormControl();
    this.mediaCtrl.valueChanges.subscribe(v => {
      this.filteredArr = this.filterArr(v);
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddNewMediaComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  filterArr(val: string): Media[] {
    if (this.media && this.media.length > 0 && val && val !== undefined) {
      return this.media.filter(m => {
        return m.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
    } else {
      return this.media;
    }
  }
}
