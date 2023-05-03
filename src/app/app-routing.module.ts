import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogContainerComponent } from './pages/blogpage/blog-container/blog-container.component';
import { DetailsContainerComponent } from './pages/detailspage/details-container/details-container.component';

const routes: Routes = [
  {
    path: '',
    component: BlogContainerComponent
  },
  {
    path: 'details/:id',
    component: DetailsContainerComponent
  },
  {
    path: 'theme',
    component: DetailsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
