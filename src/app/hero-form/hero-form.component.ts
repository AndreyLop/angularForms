import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  private powers: string[] = ['Really smart', 'Fast', 'GBE', 'Very durable'];

  public model: Hero = new Hero(11, 'Killy', this.powers[3], 'Light Yagami');

  public submitted: boolean = false;

  constructor() { }

  onSubmi(){
    this.submitted = true;
  }


  get diagnostic(): string {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

}
