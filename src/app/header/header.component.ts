import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { HeaderService } from "../header.service";
import { Subscription } from "rxjs";
import { CommonModule } from '@angular/common'; // Import CommonModule for NgIf

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule to the imports array
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected to "styleUrls"
})
export class HeaderComponent implements OnDestroy {
  showNavBar: boolean = true;
  subscription: Subscription; // Corrected the spelling of "subscription"
  loggedUser: any;

  constructor(private router: Router, private navBarService: HeaderService) {
    this.subscription = this.navBarService.showNavBar.subscribe((value) => {
      this.showNavBar = value;
    });

    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  onLogOff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
