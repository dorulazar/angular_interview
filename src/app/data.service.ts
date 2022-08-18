import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private $seconds = new BehaviorSubject<number>(0);

  public get secondsElapsed(): Observable<number> {
    return this.$seconds.asObservable();
  }

  constructor() {
    setInterval(() => this.$seconds.next(this.$seconds.value + 1), 1000);
  }
}
