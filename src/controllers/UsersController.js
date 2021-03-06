import UsersModel from "../models/UsersModel.js"

export const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getOneUsers = async (req, res) => {
    try {
        const user = await UsersModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const createUsers = async (req, res) => {
    try {
        await UsersModel.create(req.body)
        res.json({
            "message":"┬íRegistro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }
}

export const updateUsers = async (req, res) => {
    try {
        await UsersModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"┬íRegistro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const deleteUsers = async (req, res) => {
    try {
        await UsersModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"┬íRegistro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}