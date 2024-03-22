import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifSercvice: GifsService) {

  }

  public get gifs(): Gif[] {

    return this.gifSercvice.gifList;
  }
}
