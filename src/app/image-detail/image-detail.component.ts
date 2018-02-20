import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromReducer from './store/reducers/image.reducer';
import * as fromActions from './store/actions/image.actions';
import { ImageState } from '../states/app.states';
import { Image } from '../models/image.model';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../states/app.states';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  allImages$: Observable<Image[]>;
  imageById$: Observable<Image>;
  imagesIds$: Observable<string[] | number[]>;
  imageId: string;
  imageUrl = '';

  constructor(private imageService: ImageService,
              private store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.params['id'];
    this.getImageUrl(this.imageId);
  }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }

  // addImage(data: Image) {
  //   this.store.dispatch(new fromActions.AddImage({ image: data }));
  // }

  removeImage(imageId: string) {
    this.store.dispatch(new fromActions.RemoveImage({ id: this.imageId }));
    this.imageService.deleteFileData(this.imageId);
  }

}
