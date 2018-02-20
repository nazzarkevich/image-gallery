import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.states';
import * as fromReducer from '../image-detail/store/reducers/image.reducer';
import * as fromActions from '../image-detail/store/actions/image.actions';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  allImages$: Observable<Image[]>;
  private basePath = '/uploads';

  constructor(private store: Store<AppState>,
              private imageService: ImageService) { }

  ngOnInit() {
    this.allImages$ = this.store.select(fromReducer.selectAllImages);
    this.store.dispatch(new fromActions.LoadAllImages());
  }

  removeImage(imageId: string, key: string) {
    this.store.dispatch(new fromActions.RemoveImage({ id: imageId }));
    this.imageService.deleteFileData(imageId);
  }

}
