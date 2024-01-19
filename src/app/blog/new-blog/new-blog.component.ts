import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogRequest} from "../../dto/request/BlogRequest";
import {BlogService} from "../../service/blog.service";
import {Router} from "@angular/router";
import {CategoryResponse} from "../../dto/response/CategoryResponse";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent implements OnInit {

  categories!: CategoryResponse[];
  blogForm!: FormGroup;
  blogRequest!: BlogRequest;

  constructor(private titleService: Title,
              private router: Router,
              private categoryService: CategoryService,
              private blogService: BlogService) {
    this.blogRequest = {
      title: '',
      link: '',
      category: '',
      description: '',
      status: true
    }
  }

  ngOnInit(): void {

    this.titleService.setTitle("New Blog");

    this.blogForm = new FormGroup({

      title: new FormControl('', [Validators.required, Validators.minLength(10)]),
      link: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl(true, [Validators.required])
    });

    this.getCategories();
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe((response: any) => {
      this.categories = response.body;
    })
  }

  get title() {
    return this.blogForm.get('title');
  }

  get category() {
    return this.blogForm.get('category');
  }

  get description() {
    return this.blogForm.get('description');
  }

  get status() {
    return this.blogForm.get('status');
  }

  private createLink(title: string){
    return title.replace(/\s+/g, '-').toLowerCase();
  }

  onSubmit(){

    this.blogRequest.title = this.title?.value;
    this.blogRequest.link = this.createLink(this.title?.value);
    this.blogRequest.category = this.category?.value;
    this.blogRequest.description = this.description?.value;
    this.blogRequest.status = this.status?.value;

    this.blogService.postBlog(this.blogRequest).subscribe((response : any) => {
      this.router.navigateByUrl('/blog/article/' + response.body.link);
    });
  }
}
