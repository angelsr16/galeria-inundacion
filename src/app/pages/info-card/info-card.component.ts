import { Component, OnInit } from '@angular/core';
import { GALERIA } from 'src/app/constants/constants';
import { InfoCard } from 'src/app/models/InfoCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  infoCard: InfoCard = GALERIA[0];
  currentIndex: number = 0;

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    var galeriaId = this.rutaActiva.snapshot.params['id'];

    if (galeriaId && GALERIA[galeriaId]) {
      this.currentIndex = galeriaId;
      this.infoCard = GALERIA[this.currentIndex];
    }
  }

  previous() {
    var newIndex: number = Number(this.currentIndex) - 1;
    if (newIndex < 0) {
      return;
    }
    window.location.href = `/info/${newIndex}`;
  }

  next() {
    var newIndex: number = Number(this.currentIndex) + 1;
    if (newIndex >= GALERIA.length) {
      return;
    }
    window.location.href = `/info/${newIndex}`;
  }
}
