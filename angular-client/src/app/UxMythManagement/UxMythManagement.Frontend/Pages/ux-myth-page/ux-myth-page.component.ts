import { Component, OnInit } from '@angular/core';
import {UxMyth} from '../../Model/ux-myth';
import {UxMythService} from '../../../UxMythManagement.Services/ux-myth.service';

@Component({
	selector: 'app-ux-myth-page',
	templateUrl: './ux-myth-page.component.html',
	styleUrls: ['./ux-myth-page.component.css']
})
export class UxMythPageComponent implements OnInit {

	public uxMyth: UxMyth;
	private myths: UxMyth[];

	constructor(private uxMythService: UxMythService) { }

	ngOnInit() {
		this.uxMythService.getUxMyth()
		.subscribe( data => {
			this.myths = JSON.parse(data['_body']);
			this.randomizeMyth();
		});
	}

	public randomizeMyth() {
		const max = this.myths.length;
		const randValue = Math.floor(Math.random() * max);
		this.uxMyth = this.myths[randValue];
	}
}
