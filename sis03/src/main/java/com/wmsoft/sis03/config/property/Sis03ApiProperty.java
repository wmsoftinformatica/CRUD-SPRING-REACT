package com.wmsoft.sis03.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("sis03")//NOME DA PROPRIEDADE CRIADA PARA USAR NO application.properties
public class Sis03ApiProperty {

	private String originPermitida = "http://localhost:3000";
	
	public String getOriginPermitida() {
		return originPermitida;
	}

	public void setOriginPermitida(String originPermitida) {
		this.originPermitida = originPermitida;
	}
}
