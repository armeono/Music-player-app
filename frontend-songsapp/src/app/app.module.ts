import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FavoritesComponent } from './favorites/favorites.component';
import { SongsService } from './songs.service';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FavoritesComponent,

  ],
  entryComponents: [DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
    
    
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
