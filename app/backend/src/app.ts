import * as express from 'express';
import 'express-async-errors';
import errorMiddleware from './database/middlewares/error/error';
import leaderboardRouter from './database/routers/leaderboardRouter';
import loginRouter from './database/routers/loginRouter';
import matchRouter from './database/routers/matchesRouter';
import teamRouter from './database/routers/teamsRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamRouter);
    this.app.use('/matches', matchRouter);
    this.app.use('/leaderboard', leaderboardRouter);

    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
