import { Request, Response } from 'express'
import { connect } from '../database'
import { Proveedor } from '../interface/proveedor'

export async function getProveedores(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect()
        const productos = await conn.query('SELECT * FROM proveedores ORDER BY id DESC')
        return res.json(productos[0])
    } catch (e) {
        console.log(e)
    }
}