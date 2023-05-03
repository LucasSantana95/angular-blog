import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-main-news',
  templateUrl: './blog-main-news.component.html',
  styleUrls: ['./blog-main-news.component.css']
})
export class BlogMainNewsComponent {
  @Input()
  ID : string = ''
  @Input()
  Author: string = ''
  @Input()
  Date: string = ''
  @Input()
  PhotoCover: string = ''
  @Input()
  Title: string = ''
  @Input()
  Description: string = ''
  @Input()
  Themes: string[] = []
  
  constructor(private router : Router){}

  onClick() {
    this.router.navigate(['/details', this.ID])
  }
}
