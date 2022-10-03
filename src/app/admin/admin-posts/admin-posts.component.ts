import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private PostService: PostService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.PostService.getAllPosts()
    .subscribe(
      respose => {
        this.posts= respose;
      }
    );
  }

}
