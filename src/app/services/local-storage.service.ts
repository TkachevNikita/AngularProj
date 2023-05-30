import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {


    public getItem(key: string) {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }

    }

    public setItem(key: string, value: string): void {
        return localStorage.setItem(key, value);
    }
}
