import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BlogResponse} from "../../dto/response/BlogResponse";
import {BlogService} from "../../service/blog.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  page = 1;
  size = 5;
  totalItems = 0;
  blogs: Array<BlogResponse> = [];

  constructor(private titleService: Title,
              private blogService: BlogService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.titleService.setTitle("Blog");
    this.loadBlogs();
  }

  private loadBlogs(){

    this.spinner.show();

    const params = this.getRequestParams(this.page, this.size);

    this.blogService.getBlogs(params).subscribe((response: any) => {
      this.blogs = response.body.data;
      this.totalItems = response.body.totalItems;
    });

    this.spinner.hide();
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
