import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  constructor( private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      console.log(params['id']);
    })
   }

  ngOnInit() {
  }

}
