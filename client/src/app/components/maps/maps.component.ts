import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  

  lat: number = 3.432893;
  lng: number = -76.545358;
  zoom: number= 16;
  
  constructor() { }

  ngOnInit() {
  }

}
