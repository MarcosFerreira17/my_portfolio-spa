import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-update-post',
  templateUrl: './admin-update-post.component.html',
  styleUrls: ['./admin-update-post.component.css']
})
export class AdminUpdatePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  post: Post|undefined;

  ngOnInit(): void {
  this.route.paramMap.subscribe(
    params => {
      const id = params.get('id');
      if(id){
        this.postService.getById(id)
        .subscribe(
          response => {
            this.post = response;
          }
        );
      }
    }
  );
  }
}
