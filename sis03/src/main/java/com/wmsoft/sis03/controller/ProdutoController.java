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

import com.wmsoft.sis03.model.Produto;
import com.wmsoft.sis03.repository.ProdutoRepository;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@GetMapping
	@CrossOrigin(origins = "*")
	public List<Produto> listarProduto(){
		
		
		return produtoRepository.findAll();
		
	}
	
	@PostMapping
	public Produto gravarProduto(@RequestBody Produto produto) {
		
		return produtoRepository.save(produto);
		
	}
	
	@DeleteMapping(path="/codigo/{codigo}")
	public String deletarPorPathVariable(@PathVariable Long codigo) {
		
		Optional<Produto> resposta = produtoRepository.findById(codigo);
		
		if(resposta.isEmpty()) return "CODIGO NÃO ENCONTRADO";
		
		produtoRepository.deleteById(codigo);
		
		return "CODIGO DELETADO " + codigo;
	}
	
	
	@DeleteMapping
	public String deletarPorRequestBody(@RequestBody Produto produto) {
		
		Optional<Produto> resposta = produtoRepository.findById(produto.getCodigo());
		
		if(resposta.isEmpty()) return "CODIGO NÃO ENCONTRADO " + produto.getCodigo();
		
		produtoRepository.deleteById(produto.getCodigo());
		
		return "CODIGO DELETADO " + produto.getCodigo();
	}
	
	

}
