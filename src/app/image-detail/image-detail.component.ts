import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromReducer from './store/reducers/image.reducer';
import * as fromActions from './store/actions/image.actions';
import { ImageState } from '../states/app.states';
import { Image } from '../models/image.model';

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
  private imageUrl = '';

  constructor(private imageService: ImageService,
              private store: Store<ImageState>) { }

  ngOnInit() {
    this.allImages$ = this.store.select(fromReducer.selectAllImages);
    this.imagesIds$ = this.store.select(fromReducer.selectImageIds);
    this.imageById$ = this.store.select(fromReducer.selectCurrentImage);

    this.store.dispatch(new fromActions.LoadAllImages());
  }

  getImageUrl(url: string) {

  }

  addImage(data: Image) {
    this.store.dispatch(new fromActions.AddImage({ image: data }));
  }

  removeImage(imageId: string) {
    this.store.dispatch(new fromActions.RemoveImage({ id: imageId }));
  }

  selectImageById() {
    this.store.dispatch(new fromActions.SelectImage({ imageId: this.imageId }));
  }

}
