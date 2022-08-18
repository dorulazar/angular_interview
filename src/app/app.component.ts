import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = null;

  constructor(public dataService: DataService) {
    this.form = new FormGroup({
      name: new FormControl(null)
    });
  }

  public submit(): void {
    window.alert(JSON.stringify(this.form.getRawValue()));
  }
}
