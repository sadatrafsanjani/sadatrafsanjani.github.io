import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {BlogResponse} from "../../dto/response/BlogResponse";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  article!: BlogResponse;
  constructor(private titleService: Title,
              private blogService: BlogService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.getByArticleByLink(params[`link`]);
    });
  }

  private getByArticleByLink(link: string){

    this.blogService.getBlogByLink(link).subscribe((response: any) => {

      this.article = response.body;

      if(this.article.title !== undefined){
        this.titleService.setTitle(this.article.title);
      }
    });
  }

  formatDate(date: any){
    return new Date(date).toISOString().split('T')[0];
  }
}
