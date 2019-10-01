const Joi = require('@hapi/joi')

const validate = require('./index')

exports.ValidateLoginForm = () => (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    })

    const { error } = Joi.validate(req.body, schema)
    if (error) {
        return res.json({
            status:200,
            message:"validate login form.",
            errors: validate.validateError(error)
        })
    }

    next()
}

exports.validateUserForm = () => (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string().min(6).max(16).required(),
        password: Joi.string().min(8).max(20).required(),
        age: Joi.number().required(),
        email: Joi.string().email().required(),
    })

    const { error } = Joi.validate(req.body , schema)
    if (error) {
        return res.json({
            status:200,
            message: ' validate user form create',
            errors: validate.validateError(error)
        })
    }

    next()
}

exports.validateUserFormUpdate = () => (req, res, next) => {
    const schema = Joi.object().keys({
        age: Joi.number().required(),
        email: Joi.string().email().required()
    })

    const { error } = Joi.validate(req.body, schema)
    if (error) {
        return res.json({
            status: 200,
            message: 'validate user form update',
            errors: validate.validateError(error)
        })
    }

    nect()
}