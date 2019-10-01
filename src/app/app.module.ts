import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';
import { OrderRecordsComponent } from './order-records/order-records.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { FeedbackComponent } from './feedback/feedback.component';

import {routing} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    OrderRecordsComponent,
    ProductListingComponent,
    BlogPageComponent,
    FeedbackComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
