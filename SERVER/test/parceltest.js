//writing test for my parcels

import chai from 'chai';
import chaiHttp from 'cahi-http';

import parcels from '../data';

chai.should();
chai.use(chaiHttp);


describe('api test', () => {
  
    it('should get all parcels', (done) =>{
     
        chai.request(app)
        .get('/api/v1/parcels')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
              done();
        });
    });


});
