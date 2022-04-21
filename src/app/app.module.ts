import { AppRoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { SafePipe } from './videos/safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VideosModule } from './videos/videos.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    VideosModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
