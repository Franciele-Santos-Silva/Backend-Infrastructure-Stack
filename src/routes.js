import express from 'express'
import {createUser, getAllUser, deleteUser} from './controllers/userController.js'

const router = express.Router()

router.post('/cadastro', createUser)
router.get('/todos', getAllUser)
router.delete('/deletar/:id', deleteUser)

export default router