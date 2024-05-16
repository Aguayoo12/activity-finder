import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { AddAcitivityComponent } from './componets/add-acitivity/add-acitivity.component';
import { ActivitiesComponent } from './componets/activities/activities.component';
import { UserActivitiesComponent } from './componets/user-activities/user-activities.component';
import { CategoriasComponent } from './componets/categorias/categorias.component';
import { ActivityViewComponent } from './componets/activity-view/activity-view.component';
import { EditActivityComponent } from './componets/edit-activity/edit-activity.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { AdminComponent } from './componets/admin/admin.component';
import { unauthentificatedGuard } from './guards/unauthentificated.guard';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', canActivate: [unauthentificatedGuard], component: LoginComponent},
  {path: 'register', canActivate: [unauthentificatedGuard], component: RegisterComponent},
  {path: 'allActivities', component: ActivitiesComponent},
  {path: 'addActivity',canActivate: [authGuard], component: AddAcitivityComponent},
  {path: 'userActivity', canActivate: [authGuard],component: UserActivitiesComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'activity/:id', canActivate: [authGuard],component: ActivityViewComponent},
  {path: 'edit/:id', canActivate: [authGuard],component: EditActivityComponent},
  {path: 'dashboard', canActivate: [authGuard],component: DashboardComponent},
  {path: 'admin',canActivate: [adminGuard], component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
