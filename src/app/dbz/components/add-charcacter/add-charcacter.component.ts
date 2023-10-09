import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-caracter',
  templateUrl: './add-charcacter.component.html',
  styleUrls: ['./add-charcacter.component.css']
})
export class AddCharcacterComponent {
// El Output permite que el componente page.component pueda emitir una accion a trabes de este componente, permite conectar las acciones uno de otro
// EventEmitter puede emitir muchas cosas <character> es un evento generico( Pero podemos usar nuestra interfas para emitirlo) que es name y poder
  @Output()
 public onNewCharacter: EventEmitter<character> = new EventEmitter();

  public character :character = {
    name:'',
    power: '',
  };

  emitCharacter () {



    console.log(this.character);
    if ( this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);


    //Esto espara hacer el retorno

    // debugger; Es para pausar la ejecucion y poder ver por donde va

    this.character = {name:'', power:''};
  }

}
