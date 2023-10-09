import { Component } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  public characters: character[] = [{

    name:'Krillin',
    power: '1000',
  },
   {
    name: 'Goku',
    power: '9500'
   },
   {
    name: 'Vegeta',
    power: '8500'
   }

];

   onDelet ( index: number) {

    this.characters.splice(index,1)
   }

   onNewCharacter( character: character ): void {

    this.characters.push(character);

 console.log('MainPage');
 console.log(character);
}

}
