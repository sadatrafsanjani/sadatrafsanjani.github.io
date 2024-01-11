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

  page = 1;
  size = 5;
  totalItems = 0;
  blogs: Array<Blog> = [];

  constructor(private titleService: Title,
              private blogService: BlogService) { }

  ngOnInit() {
    this.titleService.setTitle("Blog");
    this.loadBlogs();
  }

  private loadBlogs(){

    const params = this.getRequestParams(this.page, this.size);

    this.blogService.getBlog(params).subscribe((response: any) => {
      this.blogs = response.body.data;
      console.log(this.blogs);
      this.totalItems = response.body.totalItems;
    })
  }

  getRequestParams(page: number, size: number) {

    let params: any = {};

    if (page) {
      params[`page`] = page;
    }

    if (size) {
      params[`size`] = size;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.loadBlogs();
  }

  formatDate(date: any){
    return new Date(date).toISOString().split('T')[0];
  }

}
