import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import {BlackBoxComponent} from "./black-box/black-box.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'about', component: HeaderComponent},
  { path: 'contact', component: ContactComponent },
  {path: 'product_page/:id',component:ProductPageComponent},
  {path:'',component:SignInPageComponent},
  {path:'sign_in',component:SignInComponent},
  {path:'sign_up',component:SignUpComponent}
];
