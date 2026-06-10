import { Routes } from '@angular/router';
import { Home, About, Skills, Projects, Resume, Contact } from './pages';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
];
