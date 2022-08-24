import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/user';
import ILogin from '../database/interfaces/ILogin';
import IUser from '../database/interfaces/IUser';
import { JwtService } from '../database/services/jwtService';

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
  describe('Login', () => {
    beforeEach(async () => {
      sinon.stub(User, "findOne").resolves(loginMockTwo as User);
      sinon.stub(JwtService, "sign").resolves('token');
      sinon.stub(, "").resolves('');
    });
  
    afterEach(() => {
      sinon.restore();
    })

      it('should return status 200', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send(loginMock);

    expect(response.status).to.equal(200);
  })

    it('should return a token', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(loginMock);

      expect(response.body).to.be.deep.equal({token: 'token'});
    })
  })
});
