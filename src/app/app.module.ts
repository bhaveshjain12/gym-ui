import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GymComponent } from './gym/gym.component';
import { JoinComponent } from './join/join.component';
import { appRoutes } from './routerConfig';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ElementsComponent } from './elements/elements.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContectComponent } from './contect/contect.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GymComponent,
    JoinComponent,
    BlogComponent,
    AboutComponent,
    PricingComponent,
    GalleryComponent,
    ElementsComponent,
    SingleBlogComponent,
    ContectComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule
 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
