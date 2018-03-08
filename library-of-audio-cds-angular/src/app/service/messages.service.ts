import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get('../../assets/messages_PL.json');
  }
}
