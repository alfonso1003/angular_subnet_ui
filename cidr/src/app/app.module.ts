import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Services
import { AppService } from './app.service';
// Routing
import { AppRoutingModule, appRouting, appRoutingProviders } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { IpListComponent } from './components/ip-list/ip-list.component';
import { IpDetailsComponent } from './components/ip-details/ip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IpListComponent,
    IpDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [AppService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
