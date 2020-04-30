import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {CartComponent} from './pages/cart/cart.component';
import {DiscountComponent} from './pages/discount/discount.component';
import {AuthGuard} from "./_guards/auth.guard";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'category/books', component: CategoryComponent},
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'cart', component: CartComponent},
    {path: 'discount', component: DiscountComponent},
    {path: 'success', component: SignupComponent},
    {path: 'order', component: OrderComponent},
    {path: 'seller', redirectTo: 'seller/product', pathMatch: 'full'},
    //{path：'**', component: 404Component},

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
