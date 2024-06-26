import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'portfolio-website';

  // private isDarkMode = true;

  constructor(private renderer: Renderer2, private themeService: ThemeService) {
    // this.updateTheme();
    this.themeService.themeChanged.subscribe(isDarkMode => {
      this.updateTheme(isDarkMode);
    });
    this.updateTheme(this.themeService.isDarkMode);
  }

  toggleTheme(): void {
    const isDarkMode = !this.themeService.isDarkMode;
    this.themeService.setTheme(isDarkMode);
  }

  private updateTheme(isDarkMode: boolean): void {
    if (isDarkMode) {
      this.renderer.removeClass(document.body, 'light-mode');
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      this.renderer.addClass(document.body, 'light-mode');
    }
    this.themeService.setTheme(isDarkMode);
  }
}

