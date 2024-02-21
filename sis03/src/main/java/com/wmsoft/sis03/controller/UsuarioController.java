package com.wmsoft.sis03.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wmsoft.sis03.model.Cliente;
import com.wmsoft.sis03.model.Usuario;
import com.wmsoft.sis03.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepostory;
	
	@GetMapping
	@CrossOrigin(origins = "*")
	public List<Usuario> listarUsuario(){
		
		return usuarioRepostory.findAll(); 
		
	}
	
	@PostMapping
	public Usuario salvarUsuario(@RequestBody Usuario usuario) {
		
		return usuarioRepostory.save(usuario);
		
	}
	
	@PutMapping
	public void put(@RequestBody Usuario usuario) {
		Optional<Usuario> usuarioEncontrado = buscarPeloCodigo(usuario.getCodigo());
		if(usuarioEncontrado.isPresent()) {
			usuarioRepostory.save(usuario);
		}
	}
	
	@DeleteMapping
	public String deletarUsuarioRequestBody(@RequestBody Usuario usuario) {
		
		Optional<Usuario> resposta = usuarioRepostory.findById(usuario.getCodigo());
		
		if(resposta.isEmpty()) return "CODIGO NAO ENCONTRADO " + usuario.getCodigo();
		
		usuarioRepostory.deleteById(usuario.getCodigo());
		
		return "CODIGO DELETADO " + usuario.getCodigo();
	}
	
	@DeleteMapping(path = "/codigo/{codigo}")
	public String deletarUsuarioPathVariable(@PathVariable Long codigo) {
		
		Optional<Usuario> resposta = usuarioRepostory.findById(codigo);
		
		if(resposta.isEmpty()) return "CODIGO NÂO ENCONTRADO " + codigo;
		
		usuarioRepostory.deleteById(codigo);
		
		return "CODIGO DELETADO " + codigo;
	}
	
	public Optional<Usuario> buscarPeloCodigo(Long codigo) {
		Optional<Usuario> usuarioEncontrado = usuarioRepostory.findById(codigo);

	    return usuarioEncontrado;
	}

}
