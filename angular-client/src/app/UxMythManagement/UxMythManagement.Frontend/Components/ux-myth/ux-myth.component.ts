import {Component, Input, OnInit} from '@angular/core';
import {UxMyth} from '../../Model/ux-myth';

@Component({
	selector: 'app-ux-myth',
	templateUrl: './ux-myth.component.html',
	styleUrls: ['./ux-myth.component.css']
})
export class UxMythComponent implements OnInit {

	@Input() uxMyth: UxMyth;

	constructor() { }

	ngOnInit() {
	}

}
