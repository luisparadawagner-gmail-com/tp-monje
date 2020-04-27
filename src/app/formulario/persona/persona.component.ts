import {Component} from '@angular/core';
import  {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-persona-persona',
    templateUrl: './persona.component.html',
})

export class PersonaComponent {
    persona = new FormGroup({
        nombre: new FormControl('Nico'),
        apellido: new FormControl(''),
        edad: new FormControl(''),
        dni: new FormControl(''),
        domicilio: new FormControl('')
    })
 
    guardarPersona(){
        debugger;
        this.persona.value;
        console.warn(this.persona.value);
    }
}