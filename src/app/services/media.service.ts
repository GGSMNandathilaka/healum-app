import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Media} from "../models/media";

@Injectable()
export class MediaService {

  media: Media[] = [];
  mediaSubject: BehaviorSubject<Media[]> = new BehaviorSubject<Media[]>([]);

  constructor(private http: Http) {
  }

  getMedia() {

    this.http.get(environment.firebaseMediaUrl)
      .map((res) => res.json())
      .subscribe(m => {
        if (JSON.stringify(m) !== JSON.stringify([])) {
          this.media = m;
          this.mediaSubject.next(this.media);
        }
      });
  }

}
