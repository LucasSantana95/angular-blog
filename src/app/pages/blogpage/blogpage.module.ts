import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogNewsComponent } from './blog-news/blog-news.component';
import { BlogMainNewsComponent } from './blog-main-news/blog-main-news.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [
    BlogContainerComponent,
    BlogItemComponent,
    BlogNewsComponent,
    BlogMainNewsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    BlogContainerComponent
  ]
})
export class BlogpageModule { }
