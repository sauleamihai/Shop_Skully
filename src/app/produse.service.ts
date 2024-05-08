import { Injectable } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {BlackBoxComponent} from "./black-box/black-box.component";
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

@Injectable({
  providedIn: 'root'
})
export class ProduseService {
  private blackBoxes: BlackBox[] = [
    { id: 1, imageSrc: 'assets/img/product_images2/main_img.png',imgButtom1:'assets/img/product_images2/botom_img1.png',imgButtom2:'assets/img/product_images2/bottom_img2.png',imgButtom3:'assets/img/product_images2/bottom_img3.png' ,productName: 'PullOver Alb', price: '18.99 $', isFavorite: false, isVisible: true },
    { id: 2, imageSrc: 'assets/img/product_images3/main_img.png',imgButtom1:'assets/img/product_images3/botom_img1.png',imgButtom2:'assets/img/product_images3/bottom_img2.png',imgButtom3:'assets/img/product_images3/bottom_img3.png' ,productName: 'Tricou V-Neck', price: '9.99 $', isFavorite: false, isVisible: true },
    { id: 3, imageSrc: 'assets/img/product_images4/main_img.png',imgButtom1:'assets/img/product_images4/botom_img1.png',imgButtom2:'assets/img/product_images4/bottom_img2.png',imgButtom3:'assets/img/product_images4/bottom_img3.png', productName: 'Pantaloni Albi', price: '29.99 $', isFavorite: false, isVisible: true },
    { id: 4, imageSrc: 'assets/img/product_images5/main_img.png',imgButtom1:'assets/img/product_images5/botom_img1.png',imgButtom2:'assets/img/product_images5/bottom_img2.png',imgButtom3:'assets/img/product_images5/bottom_img3.png', productName: 'Tricou Polo Alb', price: '39.99 $', isFavorite: false, isVisible: true },
    { id: 5, imageSrc: 'assets/img/product_images6/main_img.png',imgButtom1:'assets/img/product_images6/botom_img1.png',imgButtom2:'assets/img/product_images6/bottom_img2.png',imgButtom3:'assets/img/product_images6/bottom_img3.png', productName: 'Tricou Oversized Alb', price: '16.99 $', isFavorite: false, isVisible: true },
    { id: 6, imageSrc: 'assets/img/product_images_1/main_img.png', imgButtom1:'assets/img/product_images_1/botom_img1.png',imgButtom2:'assets/img/product_images_1/bottom_img2.png',imgButtom3:'assets/img/product_images_1/bottom_img3.png', productName: 'Tricou Post Malone', price: '17.99 $', isFavorite: false, isVisible: true }
  ];

  constructor() { }

  getBlackBoxes(): BlackBox[] {
    return this.blackBoxes;
  }
  getBlackBoxById(id: number): BlackBox | undefined {
    for (const box of this.blackBoxes) {
      if (box.id === id) {
        return box;
      }
    }
    return undefined; // Return undefined if the box with the given ID is not found
  }
}
