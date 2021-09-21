package com.silcom.manager.api.controller;

import java.util.List;

import javax.validation.Valid;

import com.silcom.manager.api.assembler.input.ProdutoDetalheInputAssembler;
import com.silcom.manager.api.assembler.output.ProdutoDetalheOutputAssembler;
import com.silcom.manager.api.dto.input.ProdutoDetalheInputDTO;
import com.silcom.manager.api.dto.output.ProdutoDetalheOutputDTO;
import com.silcom.manager.domain.model.ProdutoDetalhe;
import com.silcom.manager.domain.service.ProdutoDetalheService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cadastros/produtos/detalhes")
public class ProdutoDetalheController {
    
    @Autowired
    private ProdutoDetalheService produtoDetalheService;

    @Autowired
    private ProdutoDetalheOutputAssembler produtoDetalheOutputAssembler;

    @Autowired
    private ProdutoDetalheInputAssembler produtoDetalheInputAssembler;

    @GetMapping
    public Page<ProdutoDetalheOutputDTO> listAll(@PageableDefault(size=10) Pageable pageable) {
        Page<ProdutoDetalhe> produtoDetalhesPage = produtoDetalheService.findAll(pageable);
        return new PageImpl<>(produtoDetalheOutputAssembler.toColletionDTO(produtoDetalhesPage.getContent()), pageable, produtoDetalhesPage.getTotalElements());
    }

    @GetMapping("/{id}")
    public ProdutoDetalheOutputDTO findById(@PathVariable(required = true) Long id) {
        return produtoDetalheOutputAssembler.toDTO(produtoDetalheService.findById(id));
    }

    @GetMapping("/por-nome")
    public List<ProdutoDetalheOutputDTO> findByNome(String nome) {
        return produtoDetalheOutputAssembler.toColletionDTO(produtoDetalheService.findByNomeContaining(nome));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProdutoDetalheOutputDTO insert(@RequestBody @Valid ProdutoDetalheInputDTO produtoDetalheInputDTO) {
        var produtoDetalhe = produtoDetalheInputAssembler.toModel(produtoDetalheInputDTO);
        return produtoDetalheOutputAssembler.toDTO(produtoDetalheService.insert(produtoDetalhe));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(required = true) Long id){
        produtoDetalheService.delete(id);
    }

    @PutMapping("/{id}")
    public ProdutoDetalheOutputDTO update(@PathVariable(required = true) Long id, 
        @RequestBody @Valid ProdutoDetalheInputDTO produtoDetalheInputDTO) {
        var produtoDetalhe = produtoDetalheInputAssembler.toModel(produtoDetalheInputDTO);
        return produtoDetalheOutputAssembler.toDTO(produtoDetalheService.update(id, produtoDetalhe));
    }
}
