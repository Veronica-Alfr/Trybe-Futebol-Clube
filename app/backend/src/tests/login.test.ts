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

chai.use(chaiHttp);

const { expect } = chai;

const loginMock: ILogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const userMock: IUser = {
  id: 1,
  email: 'admin@admin.com',
  password: 'secret_admin',
  username: 'Admin',
  role: "admin"
}

const mockErrorTokenVerify = {
  message: 'Token must be a valid token',
  name: 'Unauthorized'
}

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

    describe('If token is verify', () => {
      describe('If token is validate return status 200 and user role', () => {

        let token: string;
  
        it('should return status 200 para requisição do token', async () => {
          sinon.stub(User, "findOne").resolves(userMock as User);
          sinon.stub(bcryptjs, "compareSync").returns(true);

          const response = await chai.request(app)
            .post('/login')
            .send(loginMock);
          
            token = response.body.token

            expect(response.status).to.equal(200);

            sinon.restore();
      })

        it('should return status 200 for validate token', async () => {
          const response = await chai.request(app)
            .get('/login/validate')
            .set({ 'Authorization': token });

            expect(response.status).to.equal(200);
        })

        it('should return user role', async () => {
          const response = await chai.request(app)
            .get('/login/validate')
            .set({ 'Authorization': token });

            expect(response.body).to.deep.equal({ role: 'admin' });
        })
      });

      describe('If token is verify, but is invalid', () => {
        describe('If token is invalid return status 401 and error message', () => {
          it('should return status 401', async () => {
            sinon.stub(jwt, "sign").throws(mockErrorTokenVerify);
      
            const response = await chai.request(app)
              .get('/login/validate');
      
            expect(response.status).to.equal(401)
            sinon.restore()
        })
      });
     });
   });
  })
});
