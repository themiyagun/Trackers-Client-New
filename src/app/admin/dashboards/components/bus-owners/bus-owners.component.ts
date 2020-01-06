import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-bus-owners',
  templateUrl: './bus-owners.component.html',
  styleUrls: ['./bus-owners.component.scss']
})
export class BusOwnersComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
