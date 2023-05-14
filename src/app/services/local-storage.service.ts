import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

    public getItem(item: string) {
      const data = localStorage.getItem(item);
      if (data) {
        return JSON.parse(data);
      }
    }

    public setItem(item: string, value: string) {
      return localStorage.setItem(item, value);
    }

}
