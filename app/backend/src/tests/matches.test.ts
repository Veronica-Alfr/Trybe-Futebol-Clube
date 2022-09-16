import * as sinon from 'sinon';
import * as chai from 'chai';
import { IMatch } from '../database/interfaces/IMatch';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/matches';

chai.use(chaiHttp);

const { expect } = chai;

const mockMatches: IMatch[] = [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    }
];

const mockMatchesWithInProgressTrue: IMatch[] = [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": true,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    }
];

const mockMatchCreate: IMatch = {
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 1,
  "awayTeam": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
}

describe('Match', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    describe('findAll', () => {
      describe('If Match have sucess when return everything', () => {
        beforeEach(async () => {
          sinon.stub(Match, "findAll").resolves(mockMatches as unknown as Match[]);
        });
  
        it('should return status 200', async () => {
          const response = await chai.request(app)
            .get('/matches');
    
          expect(response.status).to.equal(200);
      });

      it('should return matches body', async () => {
          const response = await chai.request(app)
            .get('/matches');
  
        expect(response.body).to.be.deep.equal(mockMatches);
      });
    });

    describe('findAll with inProgress true', () => {
      describe('If Match have sucess when return everything', () => {
        beforeEach(async () => {
            sinon.stub(Match, "findAll").resolves(mockMatchesWithInProgressTrue as unknown as Match[]);
        });
    
        it('should return status 200', async () => {
            const response = await chai.request(app)
            .get('/matches?inProgress=true');
    
            expect(response.status).to.equal(200);
        });

        it('should return matches body with inProgress true', async () => {
            const response = await chai.request(app)
            .get('/matches?inProgress=true');
    
           expect(response.body).to.be.deep.equal(mockMatchesWithInProgressTrue);
        });
      });
    });
  });

  describe('create', () => {
      describe('If Match have sucess when create a match', () => {
        beforeEach(async () => {
          sinon.stub(Match, "create").resolves();
        });

        it('should return status 201', async () => {
          const response = await chai.request(app)
            .post('/matches')
            .send();
    
          expect(response.status).to.equal(201);
      });

      it('should return new match body', async () => {
          const response = await chai.request(app)
            .post('/matches')
            .send();

        // expect(response.body).to.be.deep.equal();
      });
    });
  });
});