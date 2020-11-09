import { Sequelize } from 'sequelize';

const { DATABASE, DATABASE_PASSWORD, DATABASE_USER } = process.env;

export const sequelize = new Sequelize(
  DATABASE as string,
  DATABASE_PASSWORD as string,
  DATABASE_USER as string,
  {
    dialect: 'postgres',
    logging: false
  },
);

// sequelize.synyc({ force: true })

export const testConnection = async (): Promise<boolean> => {
  try {
    await sequelize.authenticate();

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
}
 
export default sequelize;