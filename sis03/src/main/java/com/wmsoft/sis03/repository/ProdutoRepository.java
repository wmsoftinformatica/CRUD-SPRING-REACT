package com.wmsoft.sis03.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wmsoft.sis03.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
