import User from '../models/User.js'
import crypto from 'node:crypto'

export const createUser = async(req, res) => {

    try { 
        const userToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }

        const user = await User.create(userToCreate)

        res.status(201).json(user)
    }   catch(err){
        res.status(500).json(err)
    }
}

export const getAllUser = async (req, res) => {

    const users = await User.findAll()
    res.status(200).json(users)
}

export const deleteUser = async (req, res) => {

    const user = await User.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json(user)

}