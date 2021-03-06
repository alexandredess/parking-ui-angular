import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParkingInfo } from './parkingInfo';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient : HttpClient) { }

  getParkings():Observable <ParkingInfo[]>{
    
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl+'/parkings');
  }
  
}
