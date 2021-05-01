import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";

const materials =[
  MatSliderModule,
  MatButtonModule,
  MatIconModule,MatMenuModule,
  MatCardModule,MatDatepickerModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
];

@NgModule({
  imports:[materials],
  exports:[materials]
})
export class MaterialModule { }
