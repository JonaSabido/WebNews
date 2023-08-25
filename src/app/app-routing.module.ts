import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { AdminGuard } from './guards/AdminGuard';
import { LoginComponent } from './views/login/login.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/panel', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
