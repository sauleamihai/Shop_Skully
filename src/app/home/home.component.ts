import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

// Define an interface for the type of objects in the blackBoxes array
interface BlackBox {
  id:number;
  imageSrc: string;
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
  blackBoxes: BlackBox[] = [
    {id: 1, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false,isVisible:true},
    {id: 2, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false,isVisible:true},
    {id: 3, imageSrc: 'assets/img/pantaloni_1.png', productName: 'Pantaloni Corpse', price: '29.99 $', isFavorite: false,isVisible:true},
    {id: 4, imageSrc: 'assets/img/shirt_2.png', productName: 'Tricou Alb cu Imprimeu', price: '29.99 $', isFavorite: false,isVisible:true},
    {id: 5, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false,isVisible:true},
    {id: 6, imageSrc: 'assets/img/poste_shirt.png', productName: 'Tricou Post Malone', price: '16.99 $', isFavorite: false,isVisible:true}
  ];

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


