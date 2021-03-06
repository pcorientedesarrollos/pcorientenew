import express, { Application } from 'express'
import morgan from 'morgan'

// Routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'
import ClientesRoutes from './routes/clientes.routes'
import TelefonosRoutes from './routes/telefonos.routes'
import ProductosRoutes from './routes/productos.routes'
import ProveedoresRoutes from './routes/proveedores.routes'

export class App {
    private app: Application

    constructor(private port?: number | string) {

        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)

    }

    // Middlewares

    middlewares() {
        this.app.use(morgan('dev'))
        // this.app.use(express.urlencoded({extended: false})) //recibir datos de formularios
        this.app.use(express.json())

    }

    routes() {
        this.app.use(IndexRoutes)
        this.app.use('/posts', PostRoutes)
        this.app.use('/clientes', ClientesRoutes)
        this.app.use('/telefonos', TelefonosRoutes)
        this.app.use('/productos', ProductosRoutes)
        this.app.use('/proveedores', ProveedoresRoutes)
    }

    listen() {
        this.app.listen(this.app.get('port'))
        console.log('Mi servidor funcionando', this.app.get('port'))

    }
}