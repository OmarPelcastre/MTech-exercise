import { BehaviorSubject, Observable } from 'rxjs';
import { Farm } from './farm';

export class SelectedFarmService {
  private farm = new BehaviorSubject(null);
  sharedfarm = this.farm.asObservable();

  constructor() {}

  nextfarm(farm: Farm) {
    this.farm.next(farm);
  }
}
