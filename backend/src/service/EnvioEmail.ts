import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

interface carteiroProps{
  host:string,
}

const myEmail = process.env.EMAIL
const myPassword = process.env.PASSWORD

const transport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: '465',
	secure:true, 
	auth:{
		user:myEmail,
		pass:myPassword
	}
} as carteiroProps)


const EnvioDeEmail = async (email:string) => {
  try {
    transport.sendMail({
      from:myEmail,
      to:email,
      subject:'Pesquisa Sobre Tecnologia',
      html: '<h1>Agradecemos o seu feedback</h1> <p>Com as suas respostas, vamos fazer uma análise de satisfação.</p> <p>Vamos tentar entender como as pessoas estão lidando com o alto crescimento da tecnologia.</p> <h3>Veja outros trabalhos em andamento <a href="https://projecthubdarlan.netlify.app/">portfólio web developer</a></h3>',
      text: 'Agradecemos o seu feedback,Com as suas respostas vamos fazer uma análise de satisfação para tentar entender como as pessoas estão lidando com o alto crescimento da tecnologia.'
    })

    return "mensagem enviada com sucesso!"
  } catch (error) {
    
    return error
    
  }
}

export default EnvioDeEmail