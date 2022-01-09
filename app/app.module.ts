import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatSnackBarModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule, } from '@angular/material';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSnackBarModule, BrowserAnimationsModule, 
  MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
