const model = require('../models');
const { schemaLogin } = require('../middlewares/validation/schemas');
const jwtService = require('./jwtService');

// const validateBody = ({ email, password }) => {
//    const { error, value } = schemaLogin.validate({ email, password });

//    if (error) throw error;

//    return value;
// };

const login = async (email: string, password: string) => {
    const user = await model.User. findOne({
       where: { email, password },
   }); // isso funciona ?

    if (user.password !== password || user.email !== email) {
       const e = new Error('Incorrect email or passwords');
       e.name = 'UnauthorizedError';
       throw e;
   }

    const { password: _, ...userWithoutPass } = user.dataValues;

    const token = jwtService.createToken(userWithoutPass);

    return token;
};

module.exports = { login };