export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  id: string;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
