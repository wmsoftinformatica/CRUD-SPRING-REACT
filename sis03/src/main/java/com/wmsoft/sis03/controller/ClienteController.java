package com.wmsoft.sis03.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wmsoft.sis03.model.Cliente;
import com.wmsoft.sis03.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    
	@Autowired
	ClienteRepository clienteRepository;
	
	@GetMapping
	@CrossOrigin(origins = "*")
	public List<Cliente> getAll(){
		
		return clienteRepository.findAll();
	}
	
	@PostMapping
	public Cliente post(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
		
	}
	
	@DeleteMapping(path="/codigo/{codigo}")	
	public String deletarPorPathVariable(@PathVariable Long codigo) {
		
		Optional<Cliente> resposta = clienteRepository.findById(codigo);
		
		if(resposta.isEmpty()) return "CODIGO NÃO EXISTE " + codigo;
		
		clienteRepository.deleteById(codigo);
		
		return "CODIGO DELETADO " + codigo;
		
	}
	
	@DeleteMapping
	public String deletarPorRequestBody(@RequestBody Cliente cliente) {
		
		Optional<Cliente> resposta = clienteRepository.findById(cliente.getCodigo());
		
		if(resposta.isEmpty()) return "CODIGO NÃO ENCONTRADO";
		
		clienteRepository.deleteById(cliente.getCodigo());
		
		return "CLIENTE DELETADO " + cliente.getCodigo();
	}
}
