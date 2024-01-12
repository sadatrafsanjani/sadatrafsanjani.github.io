import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {Blog} from "../../dto/blog";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  article!: Blog;
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
      this.titleService.setTitle(this.article.title);
    });
  }

  formatDate(date: any){
    return new Date(date).toISOString().split('T')[0];
  }
}
