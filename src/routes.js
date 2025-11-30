import express from 'express'
import {createUser, getAllUser, deleteUser} from './controllers/userController.js'

const router = express.Router()

router.post('/cadastro', createUser)
router.get('/todes', getAllUser)
router.delete('/deletar', deleteUser)

export default router