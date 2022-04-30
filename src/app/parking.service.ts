import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingInfo } from './parkingInfo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient : HttpClient) { }

  getParking():Observable <ParkingInfo[]>{
    
    return this.httpClient.get<ParkingInfo[]>('http://localhost:8080/api/parkings');
  }
}
