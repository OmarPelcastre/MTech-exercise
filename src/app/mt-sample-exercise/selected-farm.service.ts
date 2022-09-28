import { Observable } from "rxjs";
import { Farm } from "./farm";
import { data } from "./mock-data.json";

export class SelectedFarmService {

  getFarms(): Observable<Farm> {
    return data<Farm>
  }

}