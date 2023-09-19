import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit(): void {
    this.title = 'Dark Vader';
    this.description = 'Join the dark side!';
    this.createdDate = new Date();
    this.snaps = 10;
    this.imageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Darth_Vader_-_2007_Disney_Weekends.jpg';
    this.buttonText = 'oh snap!';
  }

  onSnap() {
    if (this.buttonText === 'oh snap!') {
      this.snaps++;
      this.buttonText = 'Oops, un snap !';
    } else {
      this.snaps--;
      this.buttonText = 'oh snap!';
    }
  }
}
