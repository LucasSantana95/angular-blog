import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {

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
    this.router.navigate([`/details/`, this.ID])
  }
}
