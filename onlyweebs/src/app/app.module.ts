import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { ChoiceComponent } from './choice/choice.component';
import { PlaybackComponent } from './playback/playback.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AnimeComponent } from './anime/anime.component';
import { ListsComponent } from './lists/lists.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { OneListComponent } from './one-list/one-list.component';
import { AccountComponent } from './account/account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ChoiceComponent,
    PlaybackComponent,
    HomeComponent,
    NavComponent,
    AnimeComponent,
    ListsComponent,
    HelpComponent,
    FooterComponent,
    RegisterComponent,
    OneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
