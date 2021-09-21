package com.silcom.manager.domain.service;

import java.time.OffsetDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.silcom.manager.domain.exception.DuplicateKeyException;
import com.silcom.manager.domain.exception.ResourceNotFoundException;
import com.silcom.manager.domain.model.ProdutoComplemento;
import com.silcom.manager.domain.repository.ProdutoComplementoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProdutoComplementoService {
    
    private static final String ALREADY_EXISTS = "Produto complemento nome '%s' ou sigla '%s' já existe";
    private static final String NOME_NOT_FOUND = "Não foram encontrados complementos de produto com o nome '%s'";
    private static final String ID_NOT_FOUND = "Produto complemento id %d não encontrado";

    @Autowired
    private ProdutoComplementoRepository produtoComplementoRepository;

    public Page<ProdutoComplemento> findAll(Pageable pageable) {
        return produtoComplementoRepository.findAll(pageable);
    }

    public ProdutoComplemento findById(final Long id) {
        return produtoComplementoRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                String.format(ID_NOT_FOUND, id)
            ));
    }
    
    public List<ProdutoComplemento> findByNomeContaining(final String nome) {
        var produtoComplementos = produtoComplementoRepository.findByNomeContaining(nome);
        if (produtoComplementos.isEmpty()) {
            throw new ResourceNotFoundException(
                String.format(NOME_NOT_FOUND, nome)
            ); 
        }
        return produtoComplementos;
    }

    @Transactional
    public ProdutoComplemento insert(final ProdutoComplemento produtoComplemento) {
        var produtoComplementoFormatado = this.formatObject(produtoComplemento);
        if (produtoComplementoRepository.existsByNome(produtoComplemento.getNome()) ||
            produtoComplementoRepository.existsBySigla(produtoComplemento.getSigla())) {
            throw new DuplicateKeyException(
                String.format(ALREADY_EXISTS, produtoComplemento.getNome(), produtoComplemento.getSigla()));
        }
        return produtoComplementoRepository.save(produtoComplementoFormatado);
    }

    @Transactional
    public void delete(final Long id) {
        produtoComplementoRepository.delete(this.findById(id));
    }

    @Transactional
    public ProdutoComplemento update(final Long id, final ProdutoComplemento produtoComplemento) {
        var produtoComplementoFormatado = this.formatObject(produtoComplemento);
        var produtoComplementoRecovered = this.findById(id);
        if ((!produtoComplementoRecovered.getNome().equals(produtoComplementoFormatado.getNome()) &&
            produtoComplementoRepository.existsByNome(produtoComplemento.getNome()) ) ||
            (!produtoComplementoRecovered.getSigla().equals(produtoComplementoFormatado.getSigla()) &&
            produtoComplementoRepository.existsBySigla(produtoComplemento.getSigla()))) {
                throw new DuplicateKeyException(
                    String.format(ALREADY_EXISTS, produtoComplemento.getNome(), produtoComplemento.getSigla()));   
        }
        produtoComplementoFormatado.setId(id);
        produtoComplementoFormatado.setDataCriacao(produtoComplementoRecovered.getDataCriacao());
        produtoComplementoFormatado.setDataAtualizacao(OffsetDateTime.now());
        return produtoComplementoRepository.save(produtoComplementoFormatado);
    }

    private ProdutoComplemento formatObject(final ProdutoComplemento produtoComplemento) {
        produtoComplemento.setSigla(produtoComplemento.getSigla().toUpperCase());
        return produtoComplemento;
    }

}