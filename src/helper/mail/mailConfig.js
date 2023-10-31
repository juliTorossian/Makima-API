export const MailClaves = {
	EVENTO_ASIGNADO: "EVENTO_ASIG"
}

export const MailTemplate = {
	EVENTO_ASIGNADO: {
		"template":`<p>Hola %USUARIO_NOMBRE%</p>
					<p>Se te ha asignado el siguiente evento para %EVENTO_ACT_TAREA%</p>
					<p><b>%CLIENTE_NOMBRE% : [ %EVENTO_BUS% ]</b> %EVENTO_TITULO%</p>

					<p>Ir al evento:</p>
					<a href="http://pandora:8080/gacieventos/">Gaci Eventos</a>

					<p>Muchas Gracias!</p>
					<p><b>GACI GROUP</b></p>
					`,
		"asunto": "Nuevo evento asignado para %EVENTO_ACT_TAREA%"
	}
}