import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = [];
  selectedImage: string | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(images => {
      this.images = images;
      this.selectedImage = images[0]; // Set default selected image
    });
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}