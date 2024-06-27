import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './housing-location/details/details.component';
import { BlogComponent } from './blog/blog.component';

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
    path: 'blog',
    component: BlogComponent,
    title: 'Blog'
  }
];

export default routeConfig;
