import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { IpDetailsComponent } from './components/ip-details/ip-details.component';

// Application Routes
const appRoutes = [
  { path: '', component: IpDetailsComponent },
  { path: ':ip-class/:ip-address', component: IpDetailsComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
