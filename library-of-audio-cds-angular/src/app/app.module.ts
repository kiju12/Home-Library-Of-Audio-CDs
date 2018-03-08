import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from './service/album.service';
import { ArtistService } from './service/artist.service';
import { GenreService } from './service/genre.service';
import { TrackService } from './service/track.service';
import { MessagesService } from './service/messages.service';
import { AppRoutingModule } from './/app-routing.module';
import { ListViewComponent } from './component/list-view/list-view.component';
import { AddAlbumComponent } from './component/add-album/add-album.component';
import { AlbumViewComponent } from './component/album-view/album-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddAlbumComponent,
    AlbumViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
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
