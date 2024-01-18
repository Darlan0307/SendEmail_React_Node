import express from 'express'
import cors from 'cors'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


const PORT = process.env.PORT || 9001

app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})

