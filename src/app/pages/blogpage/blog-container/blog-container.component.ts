import { Component } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.css']
})
export class BlogContainerComponent {
  protected data

  constructor(){
    this.data = fakeData
  }

}
