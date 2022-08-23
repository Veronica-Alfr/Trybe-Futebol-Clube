import Joi = require("joi");

const fieldsMissing = 'All fields must be filled';

export const validateUser = (body: object) => {
    const schemaUser = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': fieldsMissing,
    }),
    password: Joi.string().required().min(7).messages({
        'string.empty': fieldsMissing,
        'string.required': fieldsMissing,
    })
});

  const { error, value } = schemaUser.validate(body);

    if (error) {
        const e = new Error(error.details[0].message);
        e.name = 'BadRequest';
        throw e;
    }

    return value;
};