

const NodeWebcam = require( 'node-webcam' );


export class CameraManager {

	private Webcam;
	private options;

	constructor() {

		this.options = {
			width: 1280,
			height: 720,
			quality: 100,
			delay: 0,
			saveShots: false,
			// [jpeg, png] support
			output: 'jpeg',
			device: false,
			callbackReturn: 'buffer',// 'location', 'buffer', 'base64',
			verbose: false
		};

		this.Webcam = NodeWebcam.create( this.options );

	}

	public takeSnapshot(): Promise<any> {

		return new Promise( (resolve, reject) => {

			this.Webcam.capture( 'test_picture', ( err, data ) => {

				if (err) {
					reject(err);
				}
				resolve(data);

			});

		});

	}

}

/*
// Also available for quick use
NodeWebcam.capture( 'test_picture', opts, ( err, data ) => {

});

// Get list of cameras
Webcam.list(( list ) => {
	const anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
});

// Return type with base 64 image
opts = {
	callbackReturn: 'base64'
};

NodeWebcam.capture( 'test_picture', opts, ( err, data ) => {
	const image = '<img src="' + data + '">';
});
*/
