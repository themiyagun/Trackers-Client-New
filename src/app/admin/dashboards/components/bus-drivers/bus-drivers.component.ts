import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-bus-drivers',
  templateUrl: './bus-drivers.component.html',
  styleUrls: ['./bus-drivers.component.scss']
})
export class BusDriversComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
