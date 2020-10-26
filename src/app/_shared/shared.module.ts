import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TokenModalComponent } from './modals/token-modal/token-modal.component';

@NgModule({
  declarations: [
    InfoModalComponent,
    TokenModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule
  ]
})
export class SharedModule { }
