import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import 'dotenv/config.js'

//app config
const app = express()
const port = 4000


//middleware
app.use(express.json()) // req from frontend to backend is parsed 
app.use(cors()) // we can access frontend from backend

//connection to db
connectDB();

//api endpoints
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send('Root working!!!');
})

app.listen(port,(req,res)=>{
    console.log(`Server listening to port ${port}`);
})