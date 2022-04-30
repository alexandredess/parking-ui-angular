import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {

  parking :ParkingInfo[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const parkingId = this.route.snapshot.paramMap.get('id');
  }

}
