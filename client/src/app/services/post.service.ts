import { Post } from './../models/Post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(`${this.API_URI}/post`);
  }

  getPost(id_post: string){
   return this.http.get(`${this.API_URI}/post/${id_post}`);
  }

  deletePost(id_post: string){
    return this.http.delete(`${this.API_URI}/post/${id_post}`);
  }

  savePost(post: Post){
  return this.http.post(`${this.API_URI}/post`, post);
  }

  updatePost(id: string|number, updatedPost: Post): Observable<Post> {
    return this.http.put(`${this.API_URI}/post/${id}`, updatedPost);

  }
}
