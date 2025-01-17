import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SkillsComponent } from './skills/skills.component';

// Font Awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    NavigationComponent,
    SkillsComponent,
    NgbModule,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lab1';
  constructor(private library: FaIconLibrary) {
    // Add icons to the library
    this.library.addIcons(faLinkedin, faTwitter, faGithub);
  }
}
