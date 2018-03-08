import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './component/list-view/list-view.component';
import { AddAlbumComponent } from './component/add-album/add-album.component';
import { AlbumViewComponent } from './component/album-view/album-view.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: 'library', component: ListViewComponent },
  { path: 'addAlbum', component: AddAlbumComponent },
  { path: 'library/album/:id', component: AlbumViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
