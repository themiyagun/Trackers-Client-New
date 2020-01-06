import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/services/layout.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit {

  cities = [{
    city_name: ""
  }];
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  addCitiesButton(){
    var cityName=(<HTMLInputElement>document.getElementById("mainCities")).value;
    this.cities.push({
        city_name: cityName
      });
  }

  removeCitiesButton(){
    this.cities.pop();
  }
}
