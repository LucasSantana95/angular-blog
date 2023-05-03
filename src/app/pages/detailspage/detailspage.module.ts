import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [
    DetailsContainerComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    DetailsContainerComponent
  ]
})
export class DetailspageModule { }
