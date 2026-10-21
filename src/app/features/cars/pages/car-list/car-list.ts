import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';
import { CarCard } from '../car-card/car-card';

@Component({
  selector: 'app-car-list',
  imports: [AsyncPipe, CarCard],
  templateUrl: './car-list.html',
  styleUrl: './car-list.scss',
})
export class CarList implements OnInit {
  private carService = inject(CarService);
  cars$!: Observable<Car[]>;

  ngOnInit(): void {
    this.cars$ = this.carService.getCars();
  }
}