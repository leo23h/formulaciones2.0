import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormulacionService } from '../../core/services/formulacion.service';
import { Formula } from '../../shared/models/formula.interface';

@Component({
  selector: 'app-formulas',
  imports: [RouterLink],
  providers: [FormulacionService],
  templateUrl: './formulas.component.html',
  styleUrl: './formulas.component.css'
})
export class FormulasComponent implements OnInit{
  
  private formulacionService = inject(FormulacionService);
  listaFormulaciones: Formula[] = [];

  ngOnInit(): void {
    this.listarFormulas();
  }

  listarFormulas(){
   this.listaFormulaciones = this.formulacionService.obtenerFormulaciones()
    console.log("lista de formulas", this.listaFormulaciones);
  }   


}
