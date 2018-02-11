import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyComponent } from './components/spotify/spotify.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/nightboard', pathMatch: 'full' },
  { path: 'nightboard', component: AppComponent },
  { path: 'callback', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
