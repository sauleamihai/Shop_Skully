import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ProduseService} from "../produse.service";

// Define an interface for the type of objects in the blackBoxes array
interface BlackBox {
  id:number;
  imageSrc: string;
  imgButtom1:string;
  imgButtom2:string;
  imgButtom3:string;
  productName: string;
  price: string;
  isFavorite: boolean;
  isVisible:boolean;
}

@Component({

  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blackBoxes: BlackBox[] = [];

  constructor(private produseService: ProduseService) { }

  ngOnInit(): void {
    // Fetch black boxes data when the component initializes
    this.fetchBlackBoxes();
  }

  fetchBlackBoxes() {
    // Call the service method to get black boxes data
    this.blackBoxes = this.produseService.getBlackBoxes();
  }

  favourites: BlackBox[] = [];
  favouritePressed: boolean = false;


  toggleFavorite(id: number) {
    console.log("Toggle favorite method called for id:", id);
    const box = this.blackBoxes.find(b => b.id === id);
    if (box) {
      box.isFavorite = !box.isFavorite;
      if (box.isFavorite) {
        this.favourites.push(box);
      } else {
        const index = this.favourites.findIndex(f => f.id === id);
        if (index !== -1) {
          this.favourites.splice(index, 1);
        }
      }
    }
  }

  showFavorites() {
    if (this.favourites.length === 0 || this.favouritePressed) {
      // Show all boxes
      this.blackBoxes.forEach(box => {
        box.isVisible = true;
      });
      this.favouritePressed = false; // Reset the flag
    } else {
      // Show only favorites
      this.blackBoxes.forEach(box => {
        box.isVisible = box.isFavorite;
      });
      this.favouritePressed = true; // Set the flag
    }
  }

  protected readonly RouterLink = RouterLink;
  protected readonly RouterLinkActive = RouterLinkActive;
}


