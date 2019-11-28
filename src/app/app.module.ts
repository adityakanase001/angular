import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    ContactComponent,
    AboutComponent,
    DeleteComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : "" , component: HomeComponent, canActivate: [AuthService]},
      { path : "home" , component: HomeComponent, canActivate: [AuthService]},
      { path : "register" , component: RegisterComponent, canActivate: [AuthService]},
      { path : "edit/:No" , component: EditComponent, canActivate: [AuthService]},
      { path : "delete/:No" , component: DeleteComponent, canActivate: [AuthService]},

      { path : "login" , component: LoginComponent},
      { path : "about" , component: AboutComponent},
      { path : "contact" , component: ContactComponent},
      { path : "**" ,component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
