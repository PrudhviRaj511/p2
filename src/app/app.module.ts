import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyAxbTXDDZHKzo98jTK0pCRC9_kuNBLqgIs",
    // }),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
