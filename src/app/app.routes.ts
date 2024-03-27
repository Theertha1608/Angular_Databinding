import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:'', 
        component: HomeComponent
    },
    {
        path:"home-component", 
        component: HomeComponent
    },
    {
        path:"profile-component",
        component :ProfileComponent
    },
    {
        path:"about-component",
        component: AboutComponent
        
    },
];
