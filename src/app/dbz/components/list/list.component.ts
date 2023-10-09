import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    power: '10'

  }]

    @Output ()
   public Delet: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void {


   this.Delet.emit( index )
    console.log(index)
  }


}
