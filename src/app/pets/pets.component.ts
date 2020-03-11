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

  openPetsDescriptionModal(animal: AnimalStructure) {
    this.dialogService.appendDialogComponentToBody(animal);
  }

}