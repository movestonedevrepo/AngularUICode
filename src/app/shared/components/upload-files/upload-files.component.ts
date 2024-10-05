import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [],
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css',
})
export class UploadFilesComponent implements OnInit {
  files: any[] = [];
  isDragging = false;
  assetPath = `${environment.assestsBasePath}images/Admin-Dashboard`;
  existingImages: Array<any> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<UploadFilesComponent>
  ) {}

  ngOnInit(): void {
    this.existingImages = this.data.extras;
    console.log(this.existingImages);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const droppedFiles = Array.from(event.dataTransfer!.files);
    this.handleFiles(droppedFiles);
  }

  onFilesSelected(event: any) {
    const selectedFiles = Array.from(event.target.files);
    this.handleFiles(selectedFiles);
  }

  handleFiles(fileList: any[]) {
    for (let file of fileList) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        file.preview = e.target.result;
      };
      reader.readAsDataURL(file);
      this.files.push(file);
    }
  }

  isImage(file: any) {
    return file.type.startsWith('image/');
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  closeLoginPopup(result?: any) {
    this.dialogRef.close(result);
  }

  uploadFiles(): void {
    if (this.files && this.files.length > 0) {
      this.closeLoginPopup(this.files);
    }
  }
}
