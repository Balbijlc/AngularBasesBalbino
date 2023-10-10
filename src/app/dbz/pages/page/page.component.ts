import { Component } from '@angular/core';
import { ServicioDBZService } from '../../services/servicio-dbz.service';
import { character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

constructor ( private ServicioDBZService: ServicioDBZService ) {}

get characters(): character[] {

  return [...this.ServicioDBZService.characters];
}

onDeleteCharacter (id:string): void{

  this.ServicioDBZService.deleteCharacterID( id );

}


onNewCharacter (character:character): void {
this.ServicioDBZService.addCharacter( character);

}
}
