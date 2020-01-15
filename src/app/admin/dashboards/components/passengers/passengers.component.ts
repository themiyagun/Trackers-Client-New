import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { Passenger } from './../../../../core/models/passenger.model';
import { PassengerService } from 'src/app/core/services/passenger.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  @Input() passengers: Passenger[] = [];
  private passengerSub: Subscription;

  constructor(
    private layoutService: LayoutService, 
    public passengerService: PassengerService ) { }

  ngOnInit() {
    this.passengerService.getPassengers();
    this.passengerSub = this.passengerService.getPassengerUpdateListner()
    .subscribe((passengers: Passenger[]) => {
      this.passengers = passengers;
    })
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  ngOnDestroy() {
    this.passengerSub.unsubscribe();
  }

}
