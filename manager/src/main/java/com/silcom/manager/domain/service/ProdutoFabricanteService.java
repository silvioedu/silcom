package com.silcom.manager.domain.service;

import java.time.OffsetDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.silcom.manager.domain.exception.DuplicateKeyException;
import com.silcom.manager.domain.exception.ResourceNotFoundException;
import com.silcom.manager.domain.model.ProdutoFabricante;
import com.silcom.manager.domain.repository.ProdutoFabricanteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProdutoFabricanteService {
    
    private static final String ALREADY_EXISTS = "Produto fabricante nome '%s' ou sigla '%s' já existe";
    private static final String NOME_NOT_FOUND = "Não foram encontrados cpres de produto com o nome '%s'";
    private static final String ID_NOT_FOUND = "Produto fabricante id %d não encontrado";

    @Autowired
    private ProdutoFabricanteRepository produtoFabricanteRepository;

    public Page<ProdutoFabricante> findAll(Pageable pageable) {
        return produtoFabricanteRepository.findAll(pageable);
    }

    public ProdutoFabricante findById(final Long id) {
        return produtoFabricanteRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                String.format(ID_NOT_FOUND, id)
            ));
    }
    
    public List<ProdutoFabricante> findByNomeContaining(final String nome) {
        var produtoFabricantes = produtoFabricanteRepository.findByNomeContainingIgnoreCase(nome);
        if (produtoFabricantes.isEmpty()) {
            throw new ResourceNotFoundException(
                String.format(NOME_NOT_FOUND, nome)
            ); 
        }
        return produtoFabricantes;
    }

    @Transactional
    public ProdutoFabricante insert(final ProdutoFabricante produtoFabricante) {
        var produtoFabricanteFormatado = this.formatObject(produtoFabricante);
        if (produtoFabricanteRepository.existsByNomeIgnoreCase(produtoFabricante.getNome()) ||
            produtoFabricanteRepository.existsBySiglaIgnoreCase(produtoFabricante.getSigla())) {
            throw new DuplicateKeyException(
                String.format(ALREADY_EXISTS, produtoFabricante.getNome(), produtoFabricante.getSigla()));
        }
        return produtoFabricanteRepository.save(produtoFabricanteFormatado);
    }

    @Transactional
    public void delete(final Long id) {
        produtoFabricanteRepository.delete(this.findById(id));
    }

    @Transactional
    public ProdutoFabricante update(final Long id, final ProdutoFabricante produtoFabricante) {
        var produtoFabricanteFormatado = this.formatObject(produtoFabricante);
        var produtoFabricanteRecovered = this.findById(id);
        if ((!produtoFabricanteRecovered.getNome().equals(produtoFabricanteFormatado.getNome()) &&
            produtoFabricanteRepository.existsByNomeIgnoreCase(produtoFabricante.getNome()) ) ||
            (!produtoFabricanteRecovered.getSigla().equals(produtoFabricanteFormatado.getSigla()) &&
            produtoFabricanteRepository.existsBySiglaIgnoreCase(produtoFabricante.getSigla()))) {
                throw new DuplicateKeyException(
                    String.format(ALREADY_EXISTS, produtoFabricante.getNome(), produtoFabricante.getSigla()));   
        }
        produtoFabricanteFormatado.setId(id);
        produtoFabricanteFormatado.setDataCriacao(produtoFabricanteRecovered.getDataCriacao());
        produtoFabricanteFormatado.setDataAtualizacao(OffsetDateTime.now());
        return produtoFabricanteRepository.save(produtoFabricanteFormatado);
    }

    private ProdutoFabricante formatObject(final ProdutoFabricante produtoFabricante) {
        produtoFabricante.setSigla(produtoFabricante.getSigla().toUpperCase());
        return produtoFabricante;
    }

}