import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);
  themeChanged = this.isDarkModeSubject.asObservable();
  isDarkMode = this.isDarkModeSubject.value;

  setTheme(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
    this.isDarkModeSubject.next(isDarkMode);
  }
}