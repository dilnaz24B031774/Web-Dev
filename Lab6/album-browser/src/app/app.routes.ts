import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AlbumsComponent } from './components/albums/albums';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];



/*
## Что означает каждая строка?
```
          → автоматически идёт на /home
/home        → показывает HomeComponent
/about       → показывает AboutComponent
/albums      → показывает список альбомов
/albums/5    → показывает альбом с id=5
/albums/5/photos → показывает фото альбома 5

*/
