import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { Image } from '../shared/image.model';
import { Store } from '@ngrx/store';
import * as imageReducer from '../image-detail/store/image.reducers';
import * as Actions from '../image-detail/store/image.actions';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Observable<Image[]>;

  constructor(private store: Store<imageReducer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new Actions.GetImages());
    this.images = this.store.select(state => state.mainState.images);
  }

}
