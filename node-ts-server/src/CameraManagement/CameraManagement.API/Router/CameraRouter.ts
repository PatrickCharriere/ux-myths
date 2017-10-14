
import {NextFunction, Request, Response, Router} from 'express';
import {CameraManager} from '../../CameraManagement.core/CameraManager';

export class CameraRouter {

	private static cameraManager: CameraManager;
	public router: Router;

	constructor() {
		this.router = Router();
		CameraRouter.cameraManager = new CameraManager();
		this.init();
	}

	public getSnapshot(req: Request, res: Response, next: NextFunction) {

		CameraRouter.cameraManager.takeSnapshot()
		.then((imageData) => {
			res.status(200);
			res.end(imageData);
		})
		.catch((err) => {
			res.status(500);
			res.send(err);
		});

	}

	public init() {
		this.router.get('/', this.getSnapshot);
	}

}

const cameraRoutes = new CameraRouter();
cameraRoutes.init();

export default cameraRoutes.router;
