import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './products/details/details.component';
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
import { WhereareComponent } from './about/whereare/whereare.component';
import { InzerkiComponent } from './blog/inzerki/inzerki.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './functionalities/registration/registration.component';
import { StockComponent } from './stock/stock.component';

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
    path: 'policies',
    component: PoliciesComponent,
    title: 'Policies'
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
    title: 'Delivery'
  },
  {
    path: 'whereare',
    component: WhereareComponent,
    title: 'Whereare'
  },
  {
    path: 'inzerki',
    component: InzerkiComponent,
    title: 'Inzerki'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path:'registration',
    component: RegistrationComponent,
    title:'Registration'
  },
  {
    path:'stock',
    component: StockComponent,
    title:'Stock'
  }

];

export default routeConfig;
