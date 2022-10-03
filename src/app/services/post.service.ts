import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiBaseUrl);
  }

  getById(id: string): Observable<Post>{
    return this.http.get<Post>(this.apiBaseUrl+ id);
  }
}
