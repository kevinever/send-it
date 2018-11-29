//writing test for my parcels

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { should } = chai.should();
chai.use(chaiHttp);


describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});



describe('/POST parcels', () => {
    it('it should create a new parcel', (done) => {
        chai.request(server)
            .post('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


describe('/GET parcels', () => {
    it('it should change location', (done) => {
        chai.request(server)
            .put('/api/v2/parcels/id/location')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});



describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});



describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});



describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});



describe('/GET parcels', () => {
    it('it should get all parcels', (done) => {
        chai.request(server)
            .get('/api/v2/parcels/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

