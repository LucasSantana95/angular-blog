import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogpageModule } from './pages/blogpage/blogpage.module'
import { SharedComponentsModule } from './shared/shared-components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailspageModule } from './pages/detailspage/detailspage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogpageModule,
    DetailspageModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
