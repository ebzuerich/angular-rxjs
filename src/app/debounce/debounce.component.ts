import { Component, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent {

  @Output() emitter = new EventEmitter<string>();
  textChange = new Subject();


  constructor() {
    this.textChange.pipe(debounceTime(2000)).subscribe((value: string) => this.emitter.emit(value));
  }
}
