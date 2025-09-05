import { Routes } from '@angular/router';
import { FormulasComponent } from './features/formulas/formulas.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { DetalleFormulaComponent } from './features/detalle-formula/detalle-formula.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    { path: '', component: FormulasComponent },
    { path: 'home', component: FormulasComponent },
    { path: 'detail/:id', component: DetalleFormulaComponent},
    { path: '**', component: NotfoundComponent }
];
