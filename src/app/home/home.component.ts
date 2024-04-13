import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define an interface for the type of objects in the blackBoxes array
interface BlackBox {
  id:number;
  imageSrc: string;
  productName: string;
  price: string;
  isFavorite: boolean;
}

@Component({

  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blackBoxes: BlackBox[] = [
    {id: 1, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false},
    {id: 2, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false},
    {id: 3, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false},
    {id: 4, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false},
    {id: 5, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false},
    {id: 6, imageSrc: 'assets/img/shirt1.png', productName: 'Tricou Corpse', price: '19.99 $', isFavorite: false}
  ];

  favourites: BlackBox[] = [];

  toggleFavorite(id: number) {
    console.log("Toggle favorite method called for id:", id);
    const box = this.blackBoxes.find(b => b.id === id);
    if (box) {
      box.isFavorite = !box.isFavorite;
      if (box.isFavorite)
        this.favourites.push(box);
    } else {
      const index = this.favourites.findIndex(f => f.id === id)
      if (index !== -1) {
        this.favourites.splice(index, 1);
      }
    }
  }
}
