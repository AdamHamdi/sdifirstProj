import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

const materials =[
  MatSliderModule,
  MatButtonModule,
  MatIconModule,MatMenuModule,
  MatCardModule
];

@NgModule({
  imports:[materials],
  exports:[materials]
})
export class MaterialModule { }
