import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostService} from "../service/post.service";
import {Post} from "../model/post";
import { Page } from '../model/paged.post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  page: Page

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostList()
      .subscribe(data => this.page = data)
  }

  goToAddTheme(){
    this.router.navigate(["add-theme"])
  }

  postDetails(post: Post){
    this.router.navigate([`post-details/${post.id}`]);
  }
}
