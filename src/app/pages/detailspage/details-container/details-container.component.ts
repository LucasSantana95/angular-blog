import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';
import { itemType } from './types';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.css']
})
export class DetailsContainerComponent {
  id : string | null = '0'
  item : itemType = {
    ID : '',
    PhotoCover: '',
    Title : '',
    Description : '',
    Author : '',
    Date : '',
    Themes : ['']
  }
  constructor( private route : ActivatedRoute){}

  ngOnInit() : void {
    this.route.paramMap.subscribe((params)=>{
      this.id = params.get('id')
      const result = fakeData.filter((data)=>{ return data.ID === this.id})
      if(result){
        this.item = result[0]
      }
    })
  }
}
