import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

}
