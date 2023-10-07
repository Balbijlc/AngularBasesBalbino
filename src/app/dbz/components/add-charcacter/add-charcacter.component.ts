import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-caracter',
  templateUrl: './add-charcacter.component.html',
  styleUrls: ['./add-charcacter.component.css']
})
export class AddCharcacterComponent {

  @Output()
 public onNewCharacter: EventEmitter<character> = new EventEmitter();

  public character :character = {
    name:'',
    power: 0
  };

  emitCharacter () {



    console.log(this.character);
    if ( this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'', power:0};
  }

}
