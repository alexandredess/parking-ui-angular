import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings : ParkingInfo[] | undefined;
  constructor() { }

  ngOnInit(): void {
    let parking1 : ParkingInfo = {
      id:1,
      nom: 'parking 1',
      nbPlacesDispo : 150,
      nbPlacesTotal : 200,
      statut : 'OUVERT',
      heureMaj :'20h25',
    }
    let parking2 : ParkingInfo = {
      id:2,
      nom: 'parking 2',
      nbPlacesDispo : 170,
      nbPlacesTotal : 235,
      statut : 'ABONNES',
      heureMaj :'20h55',
    }
    this.parkings = [];
   this.parkings.push(parking1);
   this.parkings.push(parking2);

  }

}
