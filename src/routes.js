import express from 'express'
import {createUser, getAllUsers, deleteUser} from '../controller/userController.js'

const router = express.Router()

router.post('/cadastro', createUser)
router.get('/todes', getAllUsers)
router.delete('/deletar', deleteUser)

export default router