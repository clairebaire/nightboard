import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyComponent } from './components/spotify/spotify.component';

const routes: Routes = [
  { path: '', redirectTo: '/spotify', pathMatch: 'full' },
  { path: 'spotify', component: SpotifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
