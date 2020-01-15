import { Injectable } from '@angular/core';
import { Passenger } from './../models/passenger.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private passengers: Passenger[] = [];
  private passengerUpdated = new Subject<Passenger[]>();
  constructor(private http: HttpClient) { }

  getPassengers() {
    this.http.get<{passengers: Passenger[]}>('http://localhost:3000/api/v1.0.0/getallpassengers')
    .subscribe((passengerData) => {
      this.passengers = passengerData.passengers;
      this.passengerUpdated.next([...this.passengers]);
    });
  }

  getPassengerUpdateListner() {
    return this.passengerUpdated.asObservable();
  }
}
