import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PenggunaComponent } from './pengguna/pengguna.component';
import { CreatePenggunaComponent } from './pengguna/create-pengguna/create-pengguna.component';
import { UpdatePenggunaComponent } from './pengguna/update-pengguna/update-pengguna.component';

@NgModule({
  declarations: [
    AppComponent,
    PenggunaComponent,
    CreatePenggunaComponent,
    UpdatePenggunaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
