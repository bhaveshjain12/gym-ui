// tslint:disable-next-line: import-spacing
import {Routes} from  '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { GymComponent } from './gym/gym.component';
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

export const appRoutes: Routes =[
  {
    path:'',redirectTo:'main', pathMatch:'full'
  },
    {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'gym',
        component: GymComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'user',
        component: UserhomeComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'about',
        component: AboutComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'pricing',
        component: PricingComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'gallery',
        component: GalleryComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'elements',
        component: ElementsComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'blog',
        component: BlogComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'single-blog',
        component: SingleBlogComponent
      },
      {
        //this is routes array which means then if user clicks on /home then HomeComponent will be displayed.
        path: 'contect',
        component:  ContectComponent
      },
];