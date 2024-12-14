import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';  // Updated path

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route goes to '/login'
  { path: 'login', component: AuthenticationComponent },  // Route for login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
