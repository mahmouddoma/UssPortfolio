import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PackagesComponent } from './components/packages/packages.component';
import { VisionComponent } from './components/about-us/vision.component';
import { MissionComponent } from './components/about-us/mission.component';
import { TeamComponent } from './components/about-us/team.component';
import { AuctionsComponent } from './components/our-services/auctions.component';
import { DevelopmentComponent } from './components/our-services/development.component';
import { BrokerageComponent } from './components/our-services/brokerage.component';
import { ManagementComponent } from './components/our-services/management.component';
import { LeasingComponent } from './components/our-services/leasing.component';
import { MarketingComponent } from './components/our-services/marketing.component';

export const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packages', component: PackagesComponent },
  {
    path: 'auctions',
    loadComponent: () =>
      import('./components/our-services/auctions.component').then(
        (m) => m.AuctionsComponent
      ),
  },
  {
    path: 'development',
    loadComponent: () =>
      import('./components/our-services/development.component').then(
        (m) => m.DevelopmentComponent
      ),
  },
  {
    path: 'brokerage',
    loadComponent: () =>
      import('./components/our-services/brokerage.component').then(
        (m) => m.BrokerageComponent
      ),
  },
  {
    path: 'management',
    loadComponent: () =>
      import('./components/our-services/management.component').then(
        (m) => m.ManagementComponent
      ),
  },
  {
    path: 'leasing',
    loadComponent: () =>
      import('./components/our-services/leasing.component').then(
        (m) => m.LeasingComponent
      ),
  },
  {
    path: 'marketing',
    loadComponent: () =>
      import('./components/our-services/marketing.component').then(
        (m) => m.MarketingComponent
      ),
  },
];
