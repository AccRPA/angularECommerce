import { Component } from '@angular/core';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    imports: [NgbDatepickerModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'AngularECommerce';
  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;
}
