import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainRoutingModule, routedComponents} from './SharedKernel/main-routing/main-routing.module';


@NgModule({
	declarations: [
		AppComponent,
		routedComponents,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule,
		MainRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
