import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCardComponent } from './pages/info-card/info-card.component';

const routes: Routes = [
  { path: 'info/:id', component: InfoCardComponent, pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: '/info/0' },
  { path: '**', redirectTo: '/info/0' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
