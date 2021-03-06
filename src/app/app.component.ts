import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";
import {MediaService} from "./services/media.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UsersService,
              private mediaService: MediaService) {

  }

  ngOnInit() {
    this.userService.getUsers();
    this.mediaService.getMedia();
  }
}
