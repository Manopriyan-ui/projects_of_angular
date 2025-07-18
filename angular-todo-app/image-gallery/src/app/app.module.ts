import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }