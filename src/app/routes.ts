import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './housing-location/details/details.component';
import { BlogComponent } from './blog/blog.component';
import { BenefitComponent } from './benefit/benefit.component';
import { DetailsCoursComponent } from './products/courses-honey/details-cours/details-cours.component';
import { DetailsMaterialComponent } from './products/material-honey/details-material/details-material.component';
import { CoursComponent } from './products/cours/cours.component';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './about/policies/policies.component';
import { DeliveryComponent } from './about/delivery/delivery.component';
import { MaterialHoneyComponent } from './products/material-honey/material-honey.component';
import { MaterialComponent } from './products/material/material.component';

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
    title: 'Details Course'
  },
  {
    path: 'detailsMaterial/:id',
    component: DetailsMaterialComponent,
    title: 'Details material'
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
  },
  {
    path: 'cours',
    component: CoursComponent,
    title: 'Cours'
  },
  {
    path: 'material',
    component: MaterialComponent,
    title: 'Material'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path:'policies',
    component:PoliciesComponent,
    title:'Policies'
  },
  {
    path:'delivery',
    component:DeliveryComponent,
    title:'Delivery'
  }
  
];

export default routeConfig;
