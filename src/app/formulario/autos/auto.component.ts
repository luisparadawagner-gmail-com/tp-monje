import { Component } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';


@Component({
	selector: 'app-auto',
	templateUrl: './auto.component.html'
})

export class AutoComponent{
    constructor(private fb: FormBuilder){};

	autoForm = this.fb.group({
		marca: ['', Validators.required],
		añoModelo: [''],
		patente: this.fb.group({
			numeros: [''],
			letras: ['']
        }),
        nombres: this.fb.array([this.fb.control('')])
    });
    get nombres(){
        return this.autoForm.get('nombres') as FormArray;
    }

    agregarNombre(){
        this.nombres.push(this.fb.control(''));
    }

    submit(){
        debugger;
        this.autoForm.value;

    }

}