package com.silcom.manager.domain.service;

import java.time.OffsetDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.silcom.manager.domain.exception.DuplicateKeyException;
import com.silcom.manager.domain.exception.ResourceNotFoundException;
import com.silcom.manager.domain.model.ProdutoCor;
import com.silcom.manager.domain.repository.ProdutoCorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProdutoCorService {
    
    private static final String ALREADY_EXISTS = "Produto cor nome '%s' ou sigla '%s' já existe";
    private static final String NOME_NOT_FOUND = "Não foram encontrados cpres de produto com o nome '%s'";
    private static final String ID_NOT_FOUND = "Produto cor id %d não encontrado";

    @Autowired
    private ProdutoCorRepository produtoCorRepository;

    public Page<ProdutoCor> findAll(Pageable pageable) {
        return produtoCorRepository.findAll(pageable);
    }

    public ProdutoCor findById(final Long id) {
        return produtoCorRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                String.format(ID_NOT_FOUND, id)
            ));
    }
    
    public List<ProdutoCor> findByNomeContaining(final String nome) {
        var produtoCors = produtoCorRepository.findByNomeContainingIgnoreCase(nome);
        if (produtoCors.isEmpty()) {
            throw new ResourceNotFoundException(
                String.format(NOME_NOT_FOUND, nome)
            ); 
        }
        return produtoCors;
    }

    @Transactional
    public ProdutoCor insert(final ProdutoCor produtoCor) {
        var produtoCorFormatado = this.formatObject(produtoCor);
        if (produtoCorRepository.existsByNomeIgnoreCase(produtoCor.getNome()) ||
            produtoCorRepository.existsBySiglaIgnoreCase(produtoCor.getSigla())) {
            throw new DuplicateKeyException(
                String.format(ALREADY_EXISTS, produtoCor.getNome(), produtoCor.getSigla()));
        }
        return produtoCorRepository.save(produtoCorFormatado);
    }

    @Transactional
    public void delete(final Long id) {
        produtoCorRepository.delete(this.findById(id));
    }

    @Transactional
    public ProdutoCor update(final Long id, final ProdutoCor produtoCor) {
        var produtoCorFormatado = this.formatObject(produtoCor);
        var produtoCorRecovered = this.findById(id);
        if ((!produtoCorRecovered.getNome().equals(produtoCorFormatado.getNome()) &&
            produtoCorRepository.existsByNomeIgnoreCase(produtoCor.getNome()) ) ||
            (!produtoCorRecovered.getSigla().equals(produtoCorFormatado.getSigla()) &&
            produtoCorRepository.existsBySiglaIgnoreCase(produtoCor.getSigla()))) {
                throw new DuplicateKeyException(
                    String.format(ALREADY_EXISTS, produtoCor.getNome(), produtoCor.getSigla()));   
        }
        produtoCorFormatado.setId(id);
        produtoCorFormatado.setDataCriacao(produtoCorRecovered.getDataCriacao());
        produtoCorFormatado.setDataAtualizacao(OffsetDateTime.now());
        return produtoCorRepository.save(produtoCorFormatado);
    }

    private ProdutoCor formatObject(final ProdutoCor produtoCor) {
        produtoCor.setSigla(produtoCor.getSigla().toUpperCase());
        return produtoCor;
    }

}