import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { UploadComponent } from './app/upload/upload.component';

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
];
