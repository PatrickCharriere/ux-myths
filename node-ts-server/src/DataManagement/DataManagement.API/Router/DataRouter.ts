
import {Router} from 'express';
import {DataManager} from '../../DataManagement.Core/DataManager';

export class DataRouter {

	public router: Router;
	private dataManager: DataManager;

	constructor() {
		this.router = Router();
		this.dataManager = new DataManager();
		this.init();
	}

	public init() {
		this.router.get('/', this.dataManager.getAll);
	}

}

const dataRoutes = new DataRouter();
dataRoutes.init();

export default dataRoutes.router;
