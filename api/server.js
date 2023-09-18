
import  "dotenv/config"
import express from "express"
import routes from "./routes.js"
import sessionMiddleware from "./src/middleware/session.js";


const app = express()
const PORT = process.env.PORT

app.use(express.static("./public"))

app.set('views', "./src/views")
app.set('view engine', 'ejs')

app.use(sessionMiddleware)
app.use(express.urlencoded({extended: true}))
app.use(routes)




app.listen(PORT)

/*import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.resolve(__dirname, 'public'))) 
*/
