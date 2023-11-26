import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { InvestAdvComponent } from './invest-adv/invest-adv.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './environment/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgChartsModule } from 'ng2-charts';
import { AlertModule } from '@coreui/angular';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
// Define a function that returns the player
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MyprofileComponent,
    MyportfolioComponent,
    PortfolioComponent,
    InvestAdvComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AlertModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  // providers: [PythonScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
