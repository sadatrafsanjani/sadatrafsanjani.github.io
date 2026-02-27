import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProfileDTO } from "../dto/profile.dto";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private http = inject(HttpClient);

  private readonly dataUrl = 'data/data.json';

  getData(): Observable<ProfileDTO> {

    return this.http.get<ProfileDTO>(this.dataUrl);
  }
}
