package com.silcom.manager.domain.service;

import java.time.OffsetDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.silcom.manager.domain.exception.DuplicateKeyException;
import com.silcom.manager.domain.exception.ResourceNotFoundException;
import com.silcom.manager.domain.model.ProdutoTipo;
import com.silcom.manager.domain.repository.ProdutoTipoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProdutoTipoService {
    
    private static final String ALREADY_EXISTS = "Produto tipo nome '%s' ou sigla '%s' já existe";
    private static final String NOME_NOT_FOUND = "Não foram encontrados cpres de produto com o nome '%s'";
    private static final String ID_NOT_FOUND = "Produto tipo id %d não encontrado";

    @Autowired
    private ProdutoTipoRepository produtoTipoRepository;

    public Page<ProdutoTipo> findAll(Pageable pageable) {
        return produtoTipoRepository.findAll(pageable);
    }

    public ProdutoTipo findById(final Long id) {
        return produtoTipoRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                String.format(ID_NOT_FOUND, id)
            ));
    }
    
    public List<ProdutoTipo> findByNomeContaining(final String nome) {
        var produtoTipos = produtoTipoRepository.findByNomeContainingIgnoreCase(nome);
        if (produtoTipos.isEmpty()) {
            throw new ResourceNotFoundException(
                String.format(NOME_NOT_FOUND, nome)
            ); 
        }
        return produtoTipos;
    }

    @Transactional
    public ProdutoTipo insert(final ProdutoTipo produtoTipo) {
        var produtoTipoFormatado = this.formatObject(produtoTipo);
        if (produtoTipoRepository.existsByNomeIgnoreCase(produtoTipo.getNome()) ||
            produtoTipoRepository.existsBySiglaIgnoreCase(produtoTipo.getSigla())) {
            throw new DuplicateKeyException(
                String.format(ALREADY_EXISTS, produtoTipo.getNome(), produtoTipo.getSigla()));
        }
        return produtoTipoRepository.save(produtoTipoFormatado);
    }

    @Transactional
    public void delete(final Long id) {
        produtoTipoRepository.delete(this.findById(id));
    }

    @Transactional
    public ProdutoTipo update(final Long id, final ProdutoTipo produtoTipo) {
        var produtoTipoFormatado = this.formatObject(produtoTipo);
        var produtoTipoRecovered = this.findById(id);
        if ((!produtoTipoRecovered.getNome().equals(produtoTipoFormatado.getNome()) &&
            produtoTipoRepository.existsByNomeIgnoreCase(produtoTipo.getNome()) ) ||
            (!produtoTipoRecovered.getSigla().equals(produtoTipoFormatado.getSigla()) &&
            produtoTipoRepository.existsBySiglaIgnoreCase(produtoTipo.getSigla()))) {
                throw new DuplicateKeyException(
                    String.format(ALREADY_EXISTS, produtoTipo.getNome(), produtoTipo.getSigla()));   
        }
        produtoTipoFormatado.setId(id);
        produtoTipoFormatado.setDataCriacao(produtoTipoRecovered.getDataCriacao());
        produtoTipoFormatado.setDataAtualizacao(OffsetDateTime.now());
        return produtoTipoRepository.save(produtoTipoFormatado);
    }

    private ProdutoTipo formatObject(final ProdutoTipo produtoTipo) {
        produtoTipo.setSigla(produtoTipo.getSigla().toUpperCase());
        return produtoTipo;
    }

}