import { PostService } from './../../services/post.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  posts: any = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  this.getPost();
    
  }

  getPost(){
    this.postService.getPosts().subscribe(
      res => {
         this.posts = res;
      },
      err => console.error(err)
    );

  }

  deletePost(id: string){
    this.postService.deletePost(id).subscribe(
      res =>{
         console.log(res);
         this.getPost();
      },
      err => console.error(err)
    )}

}
