import { Component, OnInit ,HostBinding} from '@angular/core';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {


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
