import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/services/layout.service';

@Component({
  selector: 'app-add-bus-owner',
  templateUrl: './add-bus-owner.component.html',
  styleUrls: ['./add-bus-owner.component.scss']
})
export class AddBusOwnerComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }
}
