import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  id!: number;
  teamName!: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  sequelize: db,
  tableName: 'teams',
  modelName: 'teams',
  underscored: true,
});

export default Team;
