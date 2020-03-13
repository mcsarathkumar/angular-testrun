import { Component, OnInit } from '@angular/core';
import { DynamicPetDescriptionService } from './_services/dynamic-pet-description.service';
import { AnimalService } from './_services/animal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private animalService: AnimalService, private dialogService: DynamicPetDescriptionService) {}

  ngOnInit() {
  }
}
