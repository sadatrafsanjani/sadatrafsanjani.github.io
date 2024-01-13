import { Injectable } from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorageService:LocalStorageService) { }

  setItem(key: string, value: any) {

    this.localStorageService.store(key, value);
  }

  getItem(key: string): any {
    return this.localStorageService.retrieve(key);
  }

  clear() {

    this.localStorageService.clear();
  }
}
