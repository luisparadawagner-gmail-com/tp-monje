import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../clases/Paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
    @Input() medicoHijo: string;
    @Output() medicoHijoEvento = new EventEmitter<string>();

    medico: string = 'Menedez';
    verPacientes: boolean = true;
    nombrePaciente: string; //propiedad

    imagenPaciente: string = 'https://cde.peru.com//ima/0/1/8/2/6/1826484/924x530/whatsapp.jpg';
    anchoImg = '150';
    altoImg = '150';
    tooltip = 'nico';

    //objeto de tipo paciente 
    paciente: Paciente = {
        nombre: 'nico',
        medico: 'gomez'
    };
    //array de pacientes 
    paciente1: Paciente[] = [
        {
            nombre: 'nico',
            medico: 'gomez'
        },
        {
            nombre: 'alexis',
            medico: 'menendez'
        }
    ];

    pacientes: any[] = ['nico', 'alexis'];

  constructor() {
      this.nombrePaciente = 'nico';
   }

  ngOnInit() {
      this.paciente.nombre = 'nico';

      this.getPacientes();
  }

  //envio otro medico al padre 
  cambioMedico(){
      this.medicoHijoEvento.emit('monje');
  }  

  verPaciente(paciente: any){
      alert('pacientes: ' + paciente);
  }

  getPacientes(){
        //llamar al servicio de pacientes
  }

}
