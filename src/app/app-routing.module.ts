import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path : "login", component: LoginComponent},
  {
    path : "admin", component : AdminTemplateComponent,canActivate:[AuthenticationGuard], children :[
      {path : "products", component : ProductsComponent},
      {path : "newProduct", component : NewProductComponent, canActivate:[AuthorizationGuard],
        data :{requiredRoles :'ADMIN'}
      },
      {path : "editProduct/:id", component : EditProductComponent, canActivate : [AuthorizationGuard],
        data :{requiredRoles :'ADMIN'}
      },
      {path : "home", component : HomeComponent},
      {path : "notAuthorized", component : NotAuthorizedComponent}
    ]
  },
  {path : "", redirectTo : "login", pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
