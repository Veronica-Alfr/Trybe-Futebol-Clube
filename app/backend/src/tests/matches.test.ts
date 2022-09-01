import * as sinon from 'sinon';
import * as chai from 'chai';
import { ITeam } from '../database/interfaces/ITeam';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/matches';

chai.use(chaiHttp);

const { expect } = chai;

// const mockMatches: IMatch = [
//     {
//       "id": 1,
//       "homeTeam": 16,
//       "homeTeamGoals": 1,
//       "awayTeam": 8,
//       "awayTeamGoals": 1,
//       "inProgress": false,
//       "teamHome": {
//         "teamName": "São Paulo"
//       },
//       "teamAway": {
//         "teamName": "Grêmio"
//       }
//     },
//     {
//       "id": 2,
//       "homeTeam": 9,
//       "homeTeamGoals": 1,
//       "awayTeam": 14,
//       "awayTeamGoals": 1,
//       "inProgress": false,
//       "teamHome": {
//         "teamName": "Internacional"
//       },
//       "teamAway": {
//         "teamName": "Santos"
//       }
//     }
// ];

// describe('Teams', () => {
//     afterEach(() => {
//       sinon.restore();
//     });
  
//     describe('findAll', () => {
//       describe('If Team have sucess when return everything', () => {
//         beforeEach(async () => {
//           sinon.stub(Match, "findAll").resolves(); // mockMatches as Match[]
//         });
  
//         it('should return status 200', async () => {
//           const response = await chai.request(app)
//             .get('/matches');
    
//           expect(response.status).to.equal(200);
//       });

//       it('should return Team body', async () => {
//           const response = await chai.request(app)
//             .get('/matches');
  
//         // expect(response.body).to.be.deep.equal();
//       });
//     });

    // describe('findByPk', () => {
    //     describe('If Team have sucess when return just one team', () => {
    //       beforeEach(async () => {
    //         sinon.stub(Team, "findByPk").resolves(mockTeam as Team);
    //       });
    
    //       it('should return status 200', async () => {
    //         const response = await chai.request(app)
    //           .get('/teams/1');
      
    //       expect(response.status).to.equal(200);
    //     });

    //       it('should return Team body', async () => {
    //         const response = await chai.request(app)
    //           .get('/teams/1');

    //       expect(response.body).to.be.deep.equal(mockTeam);
    //     });
    //   });
    // });
//   });
// });