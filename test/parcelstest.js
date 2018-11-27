//writing test for my parcels

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { should }=chai.should();
chai.use(chaiHttp);


describe('/GET parcels', () => {
    it('it should get all parcels', (done) =>{
        chai.request(server)
        .get('/api/v1/parcels/')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

