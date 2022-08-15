import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminAuthGuard } from './guard/admin-auth.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  {   
    path: 'user',canActivate:[AuthGuard],
    loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
  },
  {   
    path: 'admin',canActivate:[AdminAuthGuard],
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
