import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CountUpModule } from 'countup.js-angular2'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { ShortDisplayPipe, EthDisplayPipe, UsdDisplayPipe, ThousandPipe,
         ReversePipe, NotUndefinedPipe, AtPagePipe }   from './pipes/pipes';
import { GameDiceComponent } from './game/game-dice/game-dice.component';
import { CitizensComponent } from './citizens/citizens.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { FaqComponent } from './faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    ShortDisplayPipe, EthDisplayPipe, UsdDisplayPipe, ThousandPipe,
    ReversePipe, NotUndefinedPipe, AtPagePipe,
    GameDiceComponent, CitizensComponent, BaseLayoutComponent, SiteLayoutComponent, FaqComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    CountUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
