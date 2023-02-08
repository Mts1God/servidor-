import {Router, Request, Response} from 'express'
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/', homeController.home)
router.get('/formulario', userController.formulario)
router.get('/calculoidade',userController.idade)
router.post('/calculoidade',userController.idadeResultado)  
router.get('/avatar',userController.avatar)
router.get('/nome',userController.nome)
router.get('/idade',userController.idade1)

export default router