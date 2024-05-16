import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { HomeComponent } from './componets/home/home.component';
import { AddAcitivityComponent } from './componets/add-acitivity/add-acitivity.component';
import { FooterComponent } from './componets/footer/footer.component';
import { MainCardComponent } from './componets/main-card/main-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ActivitiesComponent } from './componets/activities/activities.component';
import { UserActivitiesComponent } from './componets/user-activities/user-activities.component';
import { CategoriasComponent } from './componets/categorias/categorias.component';
import { ActivityViewComponent } from './componets/activity-view/activity-view.component';
import { EditActivityComponent } from './componets/edit-activity/edit-activity.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { AdminComponent } from './componets/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AddAcitivityComponent,
    FooterComponent,
    MainCardComponent,
    LoginComponent,
    RegisterComponent,
    ActivitiesComponent,
    UserActivitiesComponent,
    CategoriasComponent,
    ActivityViewComponent,
    EditActivityComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
