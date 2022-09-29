import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import * as data from './mock-data.json';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent {
  farms = data.default;
  selectedFarm: Farm;
  error: boolean = false;
  constructor(private selectedFarmService: SelectedFarmService) {}

  showFarm(farm) {
    this.selectedFarmService.nextfarm(farm);
  }

  changeFilter(farm) {
    this.farms = data.default;
    switch (farm) {
      case 'no':
        this.farms = this.farms.filter((value) => {
          return value.FarmNo.startsWith('10');
        });
        break;
      case 'active':
        this.farms = this.farms.filter((value) => {
          return value.ActiveDate.toString().startsWith('2020');
        });
        break;
    }
  }

  setError() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 3500);
  }
}
