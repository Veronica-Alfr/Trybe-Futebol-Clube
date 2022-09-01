import * as sinon from 'sinon';
import * as chai from 'chai';
import { ITeam } from '../database/interfaces/ITeam';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/teams';

chai.use(chaiHttp);

const { expect } = chai;

const mockTeams: ITeam[] = [
  {
    id: 1,
    teamName: 'São Paulo',
   }
]

describe('Teams', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    describe('Team', () => {
      describe('If Team have sucess', () => {
        beforeEach(async () => {
          sinon.stub(Team, "findAll").resolves(mockTeams as Team[]);
        });
  
        it('should return status 200', async () => {
          const response = await chai.request(app)
            .get('/teams');
    
        expect(response.status).to.equal(200);
      })
    });
  
    //   describe('If Login fail', () => {
    //     describe('If user return null', () => {
    //       beforeEach(() => {
    //         sinon.stub().resolves();
    //       })
    //       it('should return a status 401', async () => {
    //         const response = await chai.request(app)
    //           .post('/login')
    //           .send({email: 'invalid@email.com', password: 'any-password'});
        
    //         expect(response.status).to.equal(401);
    //       })
    //     })
    //   });
   })
});