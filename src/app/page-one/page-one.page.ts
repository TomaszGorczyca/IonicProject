import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import { IonContent, IonTitle, IonToolbar,IonBackButton, IonButton, IonButtons,IonGrid, IonRow, IonCol,IonHeader ,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
  standalone: true,
  imports: [  CommonModule,FormsModule,IonContent,IonTitle,IonToolbar,IonBackButton,IonButton,IonButtons,IonGrid,IonRow,IonCol,IonHeader]
})

export class PageOnePage implements OnInit {
  constructor() { }
  // Array to store liked shoes
  likedShoes: string[] = [];

  // Properties to store user's geolocation coordinates
  latitude: number | null = null;
  longitude: number | null = null;

  ngOnInit() {
    // Retrieve liked shoes from localStorage if available
    const storedLikes = localStorage.getItem('likedShoes');
    this.likedShoes = storedLikes ? JSON.parse(storedLikes) : [];
  }
  
  // Method to toggle like/unlike a shoe
  toggleLike(shoeId: string) {
    console.log('Toggling like for:', shoeId);
    // If shoe is already liked, remove it from the likedShoes array
    if (this.isLiked(shoeId)) {
      this.likedShoes = this.likedShoes.filter(id => id !== shoeId);
    } else {
      // If not liked, add it to the likedShoes array
      this.likedShoes.push(shoeId);
    }
  
    localStorage.setItem('likedShoes', JSON.stringify(this.likedShoes));
  }

  // Method to check if a shoe is liked
  isLiked(shoeId: string): boolean {
    return this.likedShoes.includes(shoeId);
  }
  // Method to get the current location of the user
  async getCurrentLocation() {
    // Store the latitude and longitude from the geolocation response
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
  }
}

