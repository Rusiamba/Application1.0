import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UsersdashboardComponent } from './usersdashboard/usersdashboard.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CheckformService } from './checkform.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';


const appRoute: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'users', component: UsersdashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UsersdashboardComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [CheckformService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
