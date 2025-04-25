import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonInput, IonLabel } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonInput, IonLabel,IonHeader, IonToolbar, IonTitle, IonContent,CommonModule,FormsModule,RouterModule,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem],
})
export class HomePage {
  userName: string = '';//holds the usr's name
  constructor() {}
}
