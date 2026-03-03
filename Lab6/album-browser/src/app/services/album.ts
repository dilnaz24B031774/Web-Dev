import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient){}
  // Получить все альбомы
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);

  }
  // Получить один альбом по id

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }
    // Получить фото альбома
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  // Обновить название альбома
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // Удалить альбом
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }

  
}
