
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/data', () => {

	it('should responds with JSON array', () => {
		return chai.request(app).get('/api/data')
		.then((res) => {
			expect(res.status).to.equal(200);
			expect(res).to.be.json;
			expect(res.body).to.be.an('array');
		});
	});

});
