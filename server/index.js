import app from './app.js'
import { connectDB } from './db.js'


connectDB();
app.listen(4000) // creando el servidor
console.log('server on port', 4000)