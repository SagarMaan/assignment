import * as dotenv from "dotenv"
dotenv.config()

import app from "./app.js"

import {server} from './src/database/mongoose.js'

const { PORT , URL } = process.env

server(app , PORT , URL)
