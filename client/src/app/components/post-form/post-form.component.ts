import { PostService } from './../../services/post.service';
import { Post } from './../../models/Post';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  post: Post = {
    id_post: 0,
    titulo: '',
    comentario: '',
    cod_equipo:'', 
    fecha_post: new Date()
};

edit: boolean = false;

  constructor( private postService : PostService, private router: Router, private  activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.postService.getPost(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.post = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }
  }

  saveNewPost(){
    delete this.post.fecha_post;
    delete this.post.id_post;

    this.postService.savePost(this.post)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/posts']);
      },
      err => console.error(err)
    )
  }

  updatePost(){
    delete this.post.fecha_post;
    this.postService.updatePost(this.post.id_post,this.post)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/posts']);
      },
      err => console.error(err)
    )
    
  }

}
