import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { routing } from './app.routing';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from './service/user.service';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { AddEpisodeComponent } from './add-episode/add-episode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EpisodeListComponent,
    AddEpisodeComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    UiModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }