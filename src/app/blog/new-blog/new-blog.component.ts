import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogRequest} from "../../dto/request/blogRequest";
import {BlogService} from "../../service/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent implements OnInit {

  blogForm!: FormGroup;
  blogRequest!: BlogRequest;

  constructor(private titleService: Title,
              private router: Router,
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

    console.log(this.blogRequest);

    this.blogService.postBlog(this.blogRequest).subscribe((response : any) => {
      this.router.navigateByUrl('/blog/article/' + response.body.link);
    });
  }
}
