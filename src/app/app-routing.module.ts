import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsDemoComponent } from './pages/components-demo/components-demo.component';
import { SidenavDemoComponent } from './pages/components-demo/sidenav-demo/sidenav-demo.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { FormFieldDemoComponent } from './pages/components-demo/form-field-demo/form-field-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'componentes', pathMatch: 'full' },
  {
    path: 'introduccion',
    component: IntroduccionComponent
  },
  {
    path: 'componentes',
    component: ComponentsDemoComponent,
    children: [
      { path: '', redirectTo: 'sidenav', pathMatch: 'full' },
      { path: 'sidenav',  component: SidenavDemoComponent },
      { path: 'form-field',  component: FormFieldDemoComponent }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
