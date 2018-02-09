import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { UploadComponent } from './upload/upload.component';
import { environment } from '../environments/environment';

import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    ImageDetailComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [ImageService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
