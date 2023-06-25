import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./features/customer-site/customer-site.module').then(m => m.CustomerSiteModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
