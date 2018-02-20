import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;
  fileName = 'Choose file';

  constructor(private imageService: ImageService) { }

  handleFiles(event) {
    this.files = event.target.files;
    this.fileName = this.files[0].name;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      this.upload = new Upload(filesToUpload[idx]);
      this.imageService.uploadImage(this.upload);
    });
  }

}
