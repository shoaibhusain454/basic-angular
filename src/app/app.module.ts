import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material/material.module';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { MainNavComponent } from './layout/header/main-nav/main-nav.component';
import { MainFooterComponent } from './layout/footer/main-footer/main-footer.component';
import { UserDashboardFooterComponent } from './layout/footer/user-dashboard-footer/user-dashboard-footer.component';
import { UserDashboardHeaderComponent } from './layout/header/user-dashboard-header/user-dashboard-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogComponent,
    MainNavComponent,
    MainFooterComponent,
    UserDashboardFooterComponent,
    UserDashboardHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
