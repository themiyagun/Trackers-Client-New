import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

}
