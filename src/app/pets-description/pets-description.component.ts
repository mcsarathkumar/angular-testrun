import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { AnimalStructure } from '../_models/animals';
import { AnimalService } from '../_services/animal.service';

@Component({
  selector: 'app-pets-description',
  templateUrl: './pets-description.component.html',
  styleUrls: ['./pets-description.component.css']
})
export class PetsDescriptionComponent implements OnInit, AfterViewInit {

  @Input() petsDetails: AnimalStructure = null;
  @ViewChild('modal', {static: false}) myModal: ElementRef;
  constructor(public renderer: Renderer2, public el: ElementRef, private animalService: AnimalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.openModal();
  }

  openModal() {
    this.renderer.addClass(this.myModal.nativeElement, 'show');
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'block');
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'modal-backdrop');
    this.renderer.addClass(div, 'fade');
    this.renderer.addClass(div, 'show');
    this.renderer.setAttribute(div, 'id', 'backdropMyModal');
    document.body.appendChild(div);
  }

  closeModal() {
    this.renderer.removeClass(this.myModal.nativeElement, 'show');
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'none');
    document.getElementById('backdropMyModal').remove();
    this.el.nativeElement.remove();

  }

}