import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-medico',
    templateUrl: './medico.component.html',
    styleUrls: [ './medico.component.css' ]
})

export class MedicoComponent implements OnInit {
    medicoPadre: string = 'Gomez';
    medico2Padre: string;

    constructor(){}

    ngOnInit(): void{}

    onCambioMedico(medicoNuevo){
        this.medico2Padre = medicoNuevo;
    }
}