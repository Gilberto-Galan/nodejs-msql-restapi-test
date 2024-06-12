import { Router } from 'express';
import { ping } from '../controllers/index.controller.js';

const router = Router()

//? conexion a base de datos
router.get('/ping', ping);

 export default router