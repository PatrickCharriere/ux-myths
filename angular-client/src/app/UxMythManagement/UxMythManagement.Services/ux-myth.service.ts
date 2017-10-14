
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UxMythService {

	private serverUrl = 'http://localhost:3000';

	constructor(private http: Http) {}

	public getUxMyth(): Observable<any> {
		return this.http.get(this.serverUrl + '/api/data');
	}
}
