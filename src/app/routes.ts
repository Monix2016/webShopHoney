import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './housing-location/details/details.component';
import { BlogComponent } from './blog/blog.component';
import { BenefitComponent } from './benefit/benefit.component';
import { DetailsCoursComponent } from './products/courses-honey/details-cours/details-cours.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'detailsCours/:id',
    component: DetailsCoursComponent,
    title: 'Home details'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog'
  },
  {
    path: 'benefit',
    component: BenefitComponent,
    title: 'Benefit'
  }
];

export default routeConfig;
