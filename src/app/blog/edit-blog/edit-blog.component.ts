import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogRequest} from "../../dto/request/BlogRequest";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {BlogResponse} from "../../dto/response/BlogResponse";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent  implements OnInit {

  article!: BlogResponse;
  blogForm!: FormGroup;
  blogRequest!: BlogRequest;

  constructor(private titleService: Title,
              private router: Router,
              private route: ActivatedRoute,
              private blogService: BlogService) {
    this.blogRequest = {
      title: '',
      link: '',
      category: '',
      description: '',
      status: true
    }

    this.route.params.subscribe(params => {
      this.getArticleById(params[`id`]);
    });
  }

  ngOnInit(): void {

    this.titleService.setTitle("Edit");

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

    this.blogService.updateBlog(this.article._id, this.blogRequest).subscribe((response : any) => {
      this.router.navigateByUrl('/blog/article/' + response.body.link);
    });
  }

  private getArticleById(id: string){

    this.blogService.getBlogById(id).subscribe((response: any) => {

      this.article = response.body;

      console.log(this.article);

      if(this.article !== undefined){

        this.blogForm.setValue({
          title: this.article.title,
          link: this.article.link,
          category: this.article.category,
          description: this.article.description,
          status: this.article.status
        });
      }

    });
  }

}
