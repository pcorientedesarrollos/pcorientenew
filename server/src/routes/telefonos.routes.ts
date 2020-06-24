import { Router } from 'express';
const router = Router()
import { getTelefonosCliente } from '../controllers/clientes.controller';

router.route('/')
    .get(getTelefonosCliente)

// router.route('/:postId')
export default router