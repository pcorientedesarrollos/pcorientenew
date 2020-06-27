import { Router } from 'express';
const router = Router()
import { getProductos, getProducto, createProducto, updateProducto } from '../controllers/productos.controller';

router.route('/')
    .get(getProductos)
    .post(createProducto)

router.route('/:postId')
    .get(getProducto)
    .put(updateProducto)

export default router
