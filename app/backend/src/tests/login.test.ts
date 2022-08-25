import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/user';
import ILogin from '../database/interfaces/ILogin';
import IUser from '../database/interfaces/IUser';
// import 'dotenv/config';

chai.use(chaiHttp);

const { expect } = chai;

const loginMock: ILogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const loginMockTwo: ILogin = {
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

const userMock: IUser = {
  id: 1,
  email: 'admin@admin.com',
  password: 'secret_admin',
  username: 'Admin',
  role: "admin"
}

// const dataValues = {
//   role: 'admin'
// }

// const secret = process.env.JWT_SECRET || "";

describe('User', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Login', () => {
    describe('If Login have sucess', () => {
      beforeEach(async () => {
        sinon.stub(User, "findOne").resolves(userMock as User);
        sinon.stub(bcryptjs, "compareSync").returns(true);
      });

      it('should return status 200 e property token', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send(loginMock);
  
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
    })
  });

    describe('If Login fail', () => {
      describe('If user return null', () => {
        beforeEach(() => {
          sinon.stub(User, "findOne").resolves(null);
        })
        it('should return a status 401', async () => {
          const response = await chai.request(app)
            .post('/login')
            .send({email: 'invalid@email.com', password: 'any-password'});
      
          expect(response.status).to.equal(401);
        })
      })
    });
    // daqui pra baixo nada funciona
    describe('If token is verify', () => {
      describe('If token is validate return status 200 and user role', () => {
        // beforeEach( () => {
        //   sinon.stub(jwt, 'verify').returns();
        // });

        let token: string;
  
        it('should return status 200 e property token', async () => {
          sinon.stub(User, "findOne").resolves(userMock as User);
          sinon.stub(bcryptjs, "compareSync").returns(true);

          const response = await chai.request(app)
            .post('/login')
            .send(loginMock);
          
            token = response.body.token

            console.log(token)

            expect(response.status).to.equal(200);

            sinon.restore();
      })

        it('should return status 200', async () => {
          const response = await chai.request(app)
            .get('/login/validate')
            .set({ 'Authorization': token });

            console.log(response.body);

            expect(response.status).to.equal(200);
        })

        // it('should return user role', async () => {
        //   const response = await chai.request(app)
        //     .get('/login/validate')
        //     .send({ 'Authorization': 'token' });

        //     expect(response.body).to.have.property('role'); // to.be.eq({ role: admin })
        // })
      })
    });
  });
});
