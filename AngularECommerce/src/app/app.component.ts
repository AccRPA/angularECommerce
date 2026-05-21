import { Component } from '@angular/core';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-root',
    imports: [
      NgbDatepickerModule, 
      FormsModule, 
      ButtonModule, 
      DrawerModule, 
      ToggleSwitchModule, 
      DatePickerModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    host: { ngSkipHydration: '' }
})
export class AppComponent {
  title = 'AngularECommerce';
  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;
  visible = false;
  checked = false;
  date2 = Date.now();
}
