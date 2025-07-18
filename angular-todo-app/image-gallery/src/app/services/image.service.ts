import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // Sample image URLs (using placeholder images from Unsplash)
  private images: string[] = [
  'assets/image1.jpg',
  'assets/image2.jpg',
  'assets/image3.jpg',
  'assets/image4.jpg',
  'assets/image5.jpg',
  'assets/image6.jpg'
  ];

  getImages(): Observable<string[]> {
    return of(this.images);
  }
}