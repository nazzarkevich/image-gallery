import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  images: Observable<any>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  addImage() {

  }

  deleteImage(id) {
  }

}
