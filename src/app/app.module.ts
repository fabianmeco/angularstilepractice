import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-head/menu-head.component';
import { ProfileSideComponent } from './profile-side/profile-side.component';
import { NewsSpaceComponent } from './news-space/news-space.component';
import { RightSideComponent } from './right-side/right-side.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuHeadComponent,
    ProfileSideComponent,
    NewsSpaceComponent,
    RightSideComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
