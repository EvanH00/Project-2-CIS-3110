import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AuthenticationComponent } from './pages/authentication/authentication.component';  // Updated path
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent  // Declare the authentication component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  // Add the routing module to imports
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
