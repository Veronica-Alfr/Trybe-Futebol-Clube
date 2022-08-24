import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';
import ILogin from '../database/interfaces/ILogin';
// import IUser from '../database/interfaces/IUser';

// import { Response } from 'superagent';
import LoginService from '../database/services/loginService';

chai.use(chaiHttp);

const { expect } = chai;

const loginMock: ILogin = {
  // id: 1,
  email: 'admin@admin.com',
  password: 'secret_admin',
  // username: 'Admin',
  // role: "admin"
}

describe('Login', () => {
  beforeEach(async () => {
    sinon.stub(User, "findOne").resolves(loginMock as User); // pq não LoginService e sim User para findOne não reclamar?
  });

  afterEach(() => {
    sinon.restore();
  })

  it('should return status 200', async () => {
    const response = await chai.request(app)
      .get('/login')
      .send(loginMock);

    expect(response.status).to.equal(200);
  })

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
