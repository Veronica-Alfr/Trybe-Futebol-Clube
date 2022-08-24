import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/user';
import ILogin from '../database/interfaces/ILogin';
import LoginService from '../database/services/loginService';
import { JwtService } from '../database/services/jwtService';

chai.use(chaiHttp);

const { expect } = chai;

const loginMock: ILogin = {
  // id: 1,
  email: 'admin@admin.com',
  password: 'secret_admin',
  // username: 'Admin',
  // role: "admin"
}

const loginMockTwo: ILogin = {
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

describe('User', () => {
  describe('Login', () => {
    beforeEach(async () => {
      sinon.stub(User, "findOne").resolves(loginMockTwo as User); // pq não LoginService e sim User para findOne não reclamar?
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

    // it('should return a token', async () => {
    //   const response = await chai.request(app)
    //     .post('/login')
    //     .send(loginMock);

    //     const { password: _, ...userWithoutPass } = loginMock;
    //     const token = JwtService.sign(userWithoutPass);

    //     alterei o id? em ILogin, e joguei o id que estava em IUser para ILogin

    //   expect(response.body).to.equal(token);
    // })
  })
});
