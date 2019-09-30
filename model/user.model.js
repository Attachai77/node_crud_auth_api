const bcrypt = require('bcrypt')

const Connection = require('../connection/db')

exports.CreateUser = (username, password, email, age) => {
    console.log(password);

    const passwordNew = bcrypt.hashSync(password , 10)
    console.log(passwordNew);
    
    return Connection.from('users').insert({
        username,
        password: passwordNew,
        age,
        email
    })
}

exports.findUsername = (username) => {
    return Connection.from('users')
        .select('username as username')
        .where('username', username)
        .first()
}

exports.findUserAll = (search) => {
    const query = Connection.from('users').select('*')

    if(search){
        query.where('username' , 'like' , `%${search}%`)
    }

    return query;
}

exports.findById = (id) => {
    return Connection.from('users').select('*').where('id', id).first()
}

exports.updateUser = (id, email , age) => {
    return Connection.from('users').update({
        email,
        age
    }).where('id' , id)
}

exports.deleteUser = (id) => {
    return Connection.from('users').delete().where('id',id)
}


exports.findLoginUser = (username , password) => {
    return Connection.from('users').select('*')
        .where('username', username)
        .first()
}