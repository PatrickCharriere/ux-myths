import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { CameraViewerComponent } from './camera-viewer/camera-viewer.component';

@NgModule({
	declarations: [
		AppComponent,
		CameraViewerComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
