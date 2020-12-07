import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { L1c1Component } from './l1c1/l1c1.component';
import { L1c2Component } from './l1c2/l1c2.component';
import { L1L2c1Component } from './l1-l2c1/l1-l2c1.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { L1L2c1L3c1Component } from './l1-l2c1/l1-l2c1-l3c1/l1-l2c1-l3c1.component';


const routes: Routes = [{ path: 'contacts', component: ContactListComponent },
{ path: 'contact/:id', component: ContactDetailComponent }, {
  path: 'l1c1', component: L1c1Component, children: [
    {
      path: 'l2c1', component: L1L2c1Component, children: [{ path: 'l3c1', component: L1L2c1L3c1Component }]
    }
  ]
},
{
  path: 'l1c2', component: L1c2Component
},
{
  path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'materail', loadChildren: () => import('./materials-prac/materials-prac.module').then(m => m.MaterialsPracModule)
},
{
  path: 'lazyservice', loadChildren: () => import('./lazy-service-prac/lazy-service-prac.module').then(m => m.LazyServicePracModule)
},
{ path: 'lazyLoadPrac', loadChildren: () => import('./lazyload-prac/lazyload-prac.module').then(m => m.LazyloadPracModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
