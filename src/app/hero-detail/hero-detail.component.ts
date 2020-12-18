import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent
    private HeroService: HeroService,
    private location: Location // Angular's service for interacting with the browser.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created.
    // paramMap is a dictionary of route parameter values extracted from the URL
    // + converts string to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.HeroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
