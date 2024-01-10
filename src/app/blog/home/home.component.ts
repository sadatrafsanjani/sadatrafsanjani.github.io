import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Blog} from "../../dto/blog";
import {BlogService} from "../../service/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  blogs: Array<Blog> = [];

  constructor(private titleService: Title,
              private blogService: BlogService) { }

  ngOnInit() {
    this.titleService.setTitle("Blog");
    this.loadBlogs();
  }

  private loadBlogs(){
    this.blogService.getBlog().subscribe(response => {
      this.blogs = response;
    })
  }
}
