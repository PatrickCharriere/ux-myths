

import {NextFunction, Request, Response} from 'express';
const Data = require('./Data/data.json');

export class DataManager {

	public getAll(req: Request, res: Response, next: NextFunction) {
		res.send(Data);
		// Code: res.send('<pre>'+JSON.stringify(Data, null, 2)+'</pre>');
	}

}
