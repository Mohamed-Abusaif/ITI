import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "home"
    }
    ,
    {
        path: 'product-list',
        component: ListComponent,
        title: "product-list"
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "login"
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: "register"
    },
    {
        path: 'cart',
        component: CartComponent,
        title: "cart"
    },
    {
      path:"product-details/:id",
      component: ProductDetailsComponent,
      title: "product details"
    }
    ,
    {
        path: '**',
        component: NotFoundComponent,
        title: "not-found"
    }
];


//product card has two buttons one for cart - details
