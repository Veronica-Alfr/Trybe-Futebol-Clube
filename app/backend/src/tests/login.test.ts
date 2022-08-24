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
import { JwtService } from '../database/services/jwtService';
import Jwt from '../database/middlewares/token/tokenVerify';

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

describe('User', () => {
  beforeEach(() => {
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

    describe('If token is verify', () => {
        beforeEach( () => {
          sinon.stub(jwt, 'verify').returns()
        });

        it('should return ', async () => {
          const response = await chai.request(app)
            .post('/login')
            .send(loginMock);

      })
    });
  });
});
