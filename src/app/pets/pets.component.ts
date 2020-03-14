import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimalService } from '../_services/animal.service';
import { AnimalStructure } from '../_models/animals';
import { DynamicPetDescriptionService } from '../_services/dynamic-pet-description.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  animals: AnimalStructure[] = [];

  constructor(private animalService: AnimalService, private dialogService: DynamicPetDescriptionService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(response => {
      this.animals = response;
    });
  }

  openPetsDescriptionModal(animal: AnimalStructure, id = null) {
    if (id !== null) {
      const animalData = this.animals.slice(id, id + 1);
      console.log(...animalData);
      animal = animalData[0];
    }
    this.dialogService.appendDialogComponentToBody(animal, id);
  }

  deleteAnimal(id: number) {
    this.animalService.animals.splice(id, 1);
  }
}