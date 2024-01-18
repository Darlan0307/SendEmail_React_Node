import {Request, Response, Router} from 'express'
import { EmailController } from './controller/EmailController'

const emailcontroller = new EmailController()

const routes = Router()


routes.get("/",(req:Request,res:Response)=>{
  res.send("API rodando")
})

routes.post("/email",emailcontroller.SendEmail)



export default routes

