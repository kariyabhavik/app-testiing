import { Component, OnInit } from '@angular/core';
import {FlautaService} from '../flauta.service'
@Component({
  selector: 'app-list-products-details',
  templateUrl: './list-products-details.component.html',
  styleUrls: ['./list-products-details.component.css']
})
export class ListProductsDetailsComponent implements OnInit {

    constructor(private flauta:FlautaService) {}
    collection={};
  ngOnInit(): void {
    this.flauta.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }

}
