import { Request, Response } from "express";
import EnvioDeEmail from "../service/EnvioEmail";

export class EmailController{

  async SendEmail(req:Request,res:Response){
    const { email } = req.body

    try {

      const response = await EnvioDeEmail(email)

      res.json({response:response})
      
    } catch (error) {

      res.json({error: error})
      
    }
  }
}

