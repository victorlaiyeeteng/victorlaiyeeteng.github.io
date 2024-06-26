import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private themeService: ThemeService) {
    this.themeService.themeChanged.subscribe(isDarkMode => {
      this.updateThemeButton(isDarkMode);
    });
  }

  @ViewChild('themeButton') buttonElement: ElementRef = {} as ElementRef;

  onToggleTheme() {
    this.themeService.setTheme(!this.themeService.isDarkMode);
  }

  private updateThemeButton(isDarkMode: boolean): void {
    if (isDarkMode) {
      // change img src to "src="../../assets/images/theme-button-light.png""
      this.renderer.setAttribute(this.buttonElement.nativeElement, 'src', '../../assets/images/theme-button-light.png');
    } else {
      // change img src to "src="../../assets/images/theme-button.png""
      this.renderer.setAttribute(this.buttonElement.nativeElement, 'src', '../../assets/images/theme-button.svg');
    }
  }
}
