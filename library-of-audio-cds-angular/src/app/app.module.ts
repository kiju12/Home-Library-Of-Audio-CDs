import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from './service/album.service';
import { ArtistService } from './service/artist.service';
import { GenreService } from './service/genre.service';
import { TrackService } from './service/track.service';
import { MessagesService } from './service/messages.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AlbumService,
    ArtistService,
    GenreService,
    TrackService,
    MessagesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
