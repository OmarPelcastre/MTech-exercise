import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SelectedFarmService } from './selected-farm.service';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import {
  EditService,
  ToolbarService,
  SortService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent implements OnInit {
  farm: Farm;
  constructor(private selectedFarmService: SelectedFarmService) {}

  ngOnInit(): void {
    this.selectedFarmService.sharedfarm.subscribe((farm) => (this.farm = farm));
  }
}
