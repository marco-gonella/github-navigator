import { NgModule } from '@angular/core';


//
// Form Controls
//

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

//
// Buttons & Indicators
//

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//
// Popups & Modals
//

import { MatDialogModule } from '@angular/material/dialog';


const modules: any[] = [
  
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule 
];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
  
})
export class MaterialModule { }
