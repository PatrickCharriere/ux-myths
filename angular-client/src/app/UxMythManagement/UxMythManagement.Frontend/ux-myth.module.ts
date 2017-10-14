import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UxMythComponent} from './Components/ux-myth/ux-myth.component';
import { UxMythPageComponent } from './Pages/ux-myth-page/ux-myth-page.component';
import {UxMythService} from '../UxMythManagement.Services/ux-myth.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		UxMythComponent,
		UxMythPageComponent,
	],
	providers: [
		UxMythService
	],
})
export class UxMythModule { }
