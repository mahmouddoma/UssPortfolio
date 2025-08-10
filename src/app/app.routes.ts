import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactComponent } from './components/contact/contact.component';
<<<<<<< HEAD
import { PackagesComponent } from './components/auction/auction.component';
=======
import { PackagesComponent } from './components/packages/packages.component';
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb
import { VisionComponent } from './components/about-us/vision-component/vision.component';
import { MissionComponent } from './components/about-us/mission-component/mission.component';
import { TeamComponent } from './components/about-us/teams/team.component';

export const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packages', component: PackagesComponent },
];
