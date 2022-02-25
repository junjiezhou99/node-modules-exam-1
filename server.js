import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`)
})