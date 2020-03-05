import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../_services/animal.service';
import { AnimalStructure } from '../_models/animal.interface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  animals: AnimalStructure[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(response => {
      this.animals = response;
      console.log(this.animals);
    });
  }

}