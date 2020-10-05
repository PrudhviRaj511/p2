import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MapsComponent } from "../maps/maps.component";
import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  declarations: [DashboardComponent, CommonModule],
  imports: [CommonModule, MapsComponent, GoogleMapsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
