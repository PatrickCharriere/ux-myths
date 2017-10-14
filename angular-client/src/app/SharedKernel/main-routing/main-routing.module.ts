import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UxMythModule} from '../../UxMythManagement/UxMythManagement.Frontend/ux-myth.module';
import {UxMythPageComponent} from '../../UxMythManagement/UxMythManagement.Frontend/Pages/ux-myth-page/ux-myth-page.component';
import {MenuComponent} from '../menu/menu.component';

const mainRoutes: Routes = [
	{ path: 'ux-myth', component: UxMythPageComponent },
];

@NgModule({
	imports: [UxMythModule, RouterModule.forRoot(mainRoutes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }

export const routedComponents = [MenuComponent];
