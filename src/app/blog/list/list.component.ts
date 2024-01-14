import {Component, OnInit} from '@angular/core';
import {Blog} from "../../dto/response/blog";
import {Title} from "@angular/platform-browser";
import {BlogService} from "../../service/blog.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  page = 1;
  size = 5;
  totalItems = 0;
  blogs: Array<Blog> = [];

  constructor(private titleService: Title,
              private blogService: BlogService) { }

  ngOnInit() {
    this.titleService.setTitle("Dashboard");
    this.loadBlogs();
  }

  private loadBlogs(){

    const params = this.getRequestParams(this.page, this.size);

    this.blogService.getAllBlogs(params).subscribe((response: any) => {
      this.blogs = response.body.data;
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

  activateBlog(id: string){

    console.log("");
  }

  deactivateBlog(id: string){

    console.log("");
  }

  deleteBlog(id: string){

    console.log("");
  }
}
