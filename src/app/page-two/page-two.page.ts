import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonBackButton, IonButton, IonButtons,IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton, IonButton, IonButton,IonGrid, IonRow, IonCol, IonButtons]
})
export class PageTwoPage implements OnInit {

  constructor() { }
  likedClothing: string[] = [];

  ngOnInit() {
    // Retrieve liked Clothing from localStorage if available
    const storedLikes = localStorage.getItem('likedClothing');
    this.likedClothing  = storedLikes ? JSON.parse(storedLikes) : [];
  }
  // Method to toggle like/unlike a shoe
  toggleLike(clothingId: string) {
    console.log('Toggling like for:', clothingId);
    // If shoe is already liked, remove it from the likedShoes array
    if (this.isLiked(clothingId)) {
      this.likedClothing  = this.likedClothing.filter(id => id !== clothingId);
    } else {
      // If not liked, add it to the likedShoes array
      this.likedClothing.push(clothingId);
    }
  
    localStorage.setItem('likedClothing', JSON.stringify(this.likedClothing));
  }
  // Method to check if a shoe is liked
  isLiked(clothingId: string): boolean {
    return this.likedClothing.includes(clothingId);
  }
}
