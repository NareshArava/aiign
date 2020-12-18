import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {Note} from '../note';

@Injectable()
export class NoteService {

  constructor(private httpClient : HttpClient) { }
  getAllNotes():Observable<Array<Note>>{
     return this.httpClient.get<Array<Note>>('http://localhost:3000/notes');
  }
  addNote(note:Note):Observable<Note>{
     return this.httpClient.post<Note>('http://localhost:3000/notes',note);
  }
}
