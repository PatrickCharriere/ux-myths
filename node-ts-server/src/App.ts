
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import DataRouter from './DataManagement/DataManagement.API/Router/DataRouter';

// Creates and configures an ExpressJS web server.
class App {

	// Ref to Express instance
	public express: express.Application;

	// Run configuration methods on the Express instance.
	constructor() {

		this.express = express();
		this.middleware();
		this.routes();

	}

	// Configure Express middleware.
	private middleware(): void {

		this.express.use(logger('dev'));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));

		// Add headers
		this.express.use( (req, res, next) => {

			// Website you wish to allow to connect
			res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

			// Request methods you wish to allow
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

			// Request headers you wish to allow
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

			// Set to true if you need the website to include cookies in the requests sent
			// To the API (e.g. in case you use sessions)
			res.setHeader('Access-Control-Allow-Credentials', 'true');

			// Pass to next layer of middleware
			next();
		});

	}

	// Configure API endpoints.
	private routes(): void {
		this.express.use('/api/data', DataRouter);
	}

}

export default new App().express;
