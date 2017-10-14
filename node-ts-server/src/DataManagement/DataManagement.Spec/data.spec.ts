
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../App';

chai.use(chaiHttp);
const should = chai.should();
const assert = chai.assert;
// const expect = chai.expect;

describe('GET api/data', () => {

	it('should responds with JSON array', (done) => {
		chai.request(app).get('/api/data')
		.end((err, res: any) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			// res.body.data.name.should.equal();
			done();
		});
	});

});
