import * as nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_PASS } from '../config.js'

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
        // console.log("envioMail - 21");
        // console.log(evento);
        // console.log(usuario);
        
        message.to = usuario.mail;
        message.subject = `Nuevo evento asignado para ${evento.detalle.eventoCircuito.act.tarea.nombre}`;
        message.html = `<p>Hola ${usuario.nombre}</p>
                        <p>Se te ha asignado el siguiente evento para ${evento.detalle.eventoCircuito.act.tarea.nombre}</p>
                        <p><b>${evento.cliente.nombre} : [ ${evento.tipo}-${evento.numero} ]</b> ${evento.titulo}</p>

                        <p>Ir al evento:</p>
                        <a href="http://pandora:8080/gacieventos/">Gaci Eventos</a>

                        <p>Muchas Gracias!</p>
                        <p><b>GACI GROUP</b></p>
                        `;

        enviarMail();
        
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