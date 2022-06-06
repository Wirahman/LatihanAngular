import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenggunaComponent } from "./pengguna/pengguna.component";
import { CreatePenggunaComponent } from "./pengguna/create-pengguna/create-pengguna.component";

const routes: Routes = [
  { path: '', redirectTo: 'latihan', pathMatch: 'full' },
  { path: 'Pengguna', component: PenggunaComponent },
  { path: 'CreatePengguna', component: CreatePenggunaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }