import { Component, Input } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

   @Input()
  public characterList: character[] = [{

    name: 'Trunks',
    power: 10

  }]

  //  onDeleteId 

  onDeleteCharacter(index:number):void {



    console.log(index)
  }

}
