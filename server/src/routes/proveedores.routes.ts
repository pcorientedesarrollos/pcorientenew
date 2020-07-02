import { Router } from 'express';
const router = Router()
import { getProveedores } from '../controllers/proveedores.controller';

router.route('/')
    .get(getProveedores)

export default router