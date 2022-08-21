const Joi = require('joi');

const fieldsMissing = 'All fields must be filled';

const validateUser = (body: object) => {
    const schemaUser = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': fieldsMissing,
    }),
    password: Joi.string().required().min(7).messages({
        'string.empty': fieldsMissing,
    })
});

  const { error, value } = schemaUser.validate(body);
    if (error) return { error: { code: 400, message: error.details[0].message } };

    return value;
};

module.exports = { validateUser };
