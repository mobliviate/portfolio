import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ImprintComponent } from './pages/legal/imprint/imprint.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailComponent, title: 'Project Details' },
  {
    path: 'legal',
    component: LegalComponent,
    children: [
      { path: '', redirectTo: 'imprint', pathMatch: 'full' },
      { path: 'imprint', component: ImprintComponent },
      { path: 'privacy', component: PrivacyComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
