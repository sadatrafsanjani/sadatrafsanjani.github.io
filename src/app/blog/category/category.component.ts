import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BlogService} from "../../service/blog.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute} from "@angular/router";
import {BlogResponse} from "../../dto/response/BlogResponse";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  page = 1;
  size = 5;
  totalItems = 0;
  blogs: Array<BlogResponse> = [];
  link!:string;

  constructor(private titleService: Title,
              private blogService: BlogService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.titleService.setTitle("Category");

    this.route.params.subscribe(params => {
      this.link = params[`link`];
      this.loadBlogs(params[`link`]);
    });
  }

  private loadBlogs(link: string){

    this.spinner.show();

    const params = this.getRequestParams(this.page, this.size);

    this.blogService.getBlogsByCategory(link, params).subscribe((response: any) => {
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
    this.loadBlogs(this.link);
  }

  formatDate(date: any){
    return new Date(date).toISOString().split('T')[0];
  }
}
