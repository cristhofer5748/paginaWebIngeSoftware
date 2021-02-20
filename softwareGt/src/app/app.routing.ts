import { ServiceComponent } from './components/service/service.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { HeaderComponent } from './components/header/header.component';


const APP_ROUTES: Routes = [
  {path:'header', component: HeaderComponent },
  {path:'home', component: HomeComponent },

  {path:'service', component: ServiceComponent },
  {path:'portafolio', component: PortafolioComponent },
  {path:'nosotros', component: NosotrosComponent },
  {path:'contactanos', component: ContactanosComponent },
  {path:'**',pathMatch:'full',redirectTo:'header'},
  {path:'',component:HomeComponent}
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)

