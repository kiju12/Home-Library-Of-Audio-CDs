import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../../domain/album';
import { AlbumService } from '../../service/album.service';
import { Track } from '../../domain/track';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrackService } from '../../service/track.service';
import { MessagesService } from '../../service/messages.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  msg = '';

  album: Album;
  trackList: Track[];
  trackClicked = -1;

  trackName: FormControl;
  producerName: FormControl;
  min: FormControl;
  sec: FormControl;

  addTrackForm: FormGroup;
  titleWhitespaceError = false;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private trackService: TrackService,
    private formBuilder: FormBuilder,
    private messages: MessagesService) { }

  ngOnInit() {
    this.messages.getMessages().subscribe((data: any) => {
      this.msg = data;
    });
    this.getAlbum();
    this.trackName = new FormControl(null);
    this.producerName = new FormControl(null);
    this.min = new FormControl(null);
    this.sec = new FormControl(null);
    this.addTrackForm = this.formBuilder.group({
      title: ['', Validators.required],
      producerName: '',
      lengthMin: ['', Validators.required],
      lengthSec: ['', Validators.required]
    });
    this.trackFormOnChange();
  }

  addTrack() {
    let producerName = this.addTrackForm.get('producerName').value;
    if (producerName != null) {
      producerName = producerName.trim();
    }

    if (producerName === '') {
      producerName = 'Nieznany';
    }

    let min = +this.addTrackForm.get('lengthMin').value;
    let sec = +this.addTrackForm.get('lengthSec').value;

    while (sec >= 60) {
      min++;
      sec -= 60;
    }

    const track: Track = new Track(null, this.addTrackForm.get('title').value, producerName, min, sec);
    this.trackService.add(track, this.album.id).subscribe(res => {
      this.album.trackList.push(res);
      this.album.numberOfSongs++;
      this.album.lengthMin += min;
      this.album.lengthSec += sec;

      this.albumService.update(this.album).subscribe(albumRes => {
        this.album = albumRes;
        this.getAlbum();
      });

      this.addTrackForm.reset();
    });
  }

  trackFormOnChange() {

    this.addTrackForm.get('title').valueChanges.subscribe(value => {
      if (value == null) {
        return;
      }

      if (value.trim() === '' && value.length !== 0) {
        this.titleWhitespaceError = true;
      } else {
        this.titleWhitespaceError = false;
      }
    });

    this.addTrackForm.get('lengthMin').valueChanges.subscribe(value => {
      if (isNaN(+value) && value != null) {
        this.addTrackForm.get('lengthMin').reset();
      }
    });

    this.addTrackForm.get('lengthSec').valueChanges.subscribe(value => {
      if (isNaN(+value) && value != null) {
        this.addTrackForm.get('lengthSec').reset();
      }
    });
  }

  getAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumService.getById(id).subscribe(res => {
      this.album = res;
      this.trackList = this.album.trackList;
    });
  }

  saveName(track: Track) {
    let newName = this.trackName.value;
    if (newName == null) {
      return;
    }

    newName = newName.trim();
    if (newName === '') {
      return;
    }

    track.name = newName;
    this.trackService.update(track, this.album.id).subscribe(res => {
      this.getAlbum();
    });
  }

  saveProdName(track: Track) {
    let newName = this.producerName.value;

    if (newName == null) {
      return;
    }

    newName = newName.trim();
    if (newName === '') {
      return;
    }

    track.producerName = newName;
    this.trackService.update(track, this.album.id).subscribe(res => {
      this.getAlbum();
    });
  }

  saveTime(track: Track) {
    let min = this.min.value;
    let sec = this.sec.value;

    if (min == null && sec != null) {
      min = track.lengthMin;
      sec = +sec;

      while (sec >= 60) {
        min++;
        sec -= 60;
      }
    } else if (min != null && sec == null) {
      min = +min;
      sec = track.lengthSec;
    } else {
      return;
    }

    track.lengthMin = min;
    track.lengthSec = sec;
    this.trackService.update(track, this.album.id).subscribe(res => {
      this.getAlbum();
      this.min.reset();
      this.sec.reset();
    });
  }

  deleteTrack(index: number) {
    this.album.lengthMin -= this.trackList[index].lengthMin;
    this.album.lengthSec -= this.trackList[index].lengthSec;
    this.album.numberOfSongs--;
    this.trackService.delete(this.trackList[index].id);

    console.log(this.album.lengthMin + ' ' + this.album.lengthSec);

    this.albumService.update(this.album).subscribe(res => {

      delete this.trackList[index];

      for (let i = index; i < this.trackList.length; i++) {
        this.trackList[i] = this.trackList[i + 1];
      }

      this.trackList.pop();

      this.getAlbum();
    });
  }
}
