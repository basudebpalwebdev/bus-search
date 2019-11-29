import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusSelectionService } from './services/BusSelectionService';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TimeTableComponent,
        RecommendationComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [BusSelectionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
