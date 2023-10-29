import * as nodemailer from 'nodemailer';
import * as usuarioModel from '../../modules/v1/usuario/usuario.model.js';
import { MAIL_USER, MAIL_PASS } from '../../config.js';
import { MailClaves, MailTemplate } from './mailConfig.js';

let message = {
    from: "Gaci Eventos",
    to: "",
    subject: "",
    html: ""
};
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    }
});

export const avisoEventoAsignado = async (usuario, evento) => {

    try {
        let clave = MailClaves.EVENTO_ASIGNADO;
        
        if (puedeEnviarMail(usuario, clave)){

            let template = MailTemplate.EVENTO_ASIGNADO.template;
            let asunto = MailTemplate.EVENTO_ASIGNADO.asunto;

            asunto = asunto.replace('%EVENTO_ACT_TAREA%', evento.detalle.eventoCircuito.act.tarea.nombre);

            template = template.replace('%USUARIO_NOMBRE%', usuario.nombre);
            template = template.replace('%EVENTO_ACT_TAREA%', evento.detalle.eventoCircuito.act.tarea.nombre);
            template = template.replace('%CLIENTE_NOMBRE%', evento.cliente.nombre);
            template = template.replace('%EVENTO_BUS%', `${evento.tipo.id}-${evento.numero}`);
            template = template.replace('%EVENTO_TITULO%', evento.titulo);

            message.to = usuario.mail;
            message.subject = asunto;
            message.html = template;

            // message.subject = `Nuevo evento asignado para ${evento.detalle.eventoCircuito.act.tarea.nombre}`;
            // message.html = `<p>Hola ${usuario.nombre}</p>
            //                 <p>Se te ha asignado el siguiente evento para ${evento.detalle.eventoCircuito.act.tarea.nombre}</p>
            //                 <p><b>${evento.cliente.nombre} : [ ${evento.tipo.id}-${evento.numero} ]</b> ${evento.titulo}</p>
    
            //                 <p>Ir al evento:</p>
            //                 <a href="http://pandora:8080/gacieventos/">Gaci Eventos</a>
    
            //                 <p>Muchas Gracias!</p>
            //                 <p><b>GACI GROUP</b></p>
            //                 `;
    
            enviarMail();

        }
    } catch (error) {
        console.log(error);
    }

}

function enviarMail(){  
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log("Error enviando email")
            console.log(error.message)
        } else {
            console.log("Email enviado")
        }
    })
}

export const testEnvioMail = () => {
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log("Error enviando email")
            console.log(error.message)
        } else {
            console.log("Email enviado")
        }
    })
}

export const puedeEnviarMail = async (usuario, clave) => {
    try {
        let preferencias = await usuarioModel.getUsuarioPreferencias(usuario.id);
        return (preferencias.length > 0) ? preferencias.includes(clave) : false;
    } catch (err) {
        console.error(err);
    }
}