import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { InvestAdvComponent } from './invest-adv/invest-adv.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PortfolioComponent } from './portfolio/portfolio.component'; // Adjust the path as needed

const routes: Routes =
[
    {path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {path:'homepage',component:HomepageComponent},
    {path: 'login',component:LoginComponent},
    {path: 'registration',component:RegistrationComponent},
    {path: 'myportfolio',component:MyportfolioComponent},
    {path: 'myprofile',component:MyprofileComponent},
    {path: 'investadv',component:InvestAdvComponent},
    { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
