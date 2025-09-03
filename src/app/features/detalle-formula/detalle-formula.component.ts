import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormulacionService } from '../../core/services/formulacion.service';
import { Formula } from '../../shared/models/formula.interface';

@Component({
  selector: 'app-detalle-formula',
  imports: [RouterLink],
  providers: [FormulacionService],
  templateUrl: './detalle-formula.component.html',
  styleUrl: './detalle-formula.component.css'
})
export class DetalleFormulaComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private formulacionService = inject(FormulacionService);
  formulacion: Formula = {} as Formula;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const formulacionId = Number(params.get('id'));
      this.obtenerFormulaPorId(formulacionId);
    });
  }

  obtenerFormulaPorId(id: number){
    const listadoFormulaciones = this.formulacionService.obtenerFormulaciones();
    this.formulacion = listadoFormulaciones.find(i => i.id == id)!;
    console.log("formulacion", this.formulacion)

  }

}
