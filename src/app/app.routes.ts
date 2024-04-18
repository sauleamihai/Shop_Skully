import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import {BlackBoxComponent} from "./black-box/black-box.component";
import {ProductPageComponent} from "./product-page/product-page.component";

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: HeaderComponent},
  { path: 'contact', component: ContactComponent },
  {path: 'product_page/:id',component:ProductPageComponent}
];
