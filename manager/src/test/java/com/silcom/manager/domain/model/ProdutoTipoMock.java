package com.silcom.manager.domain.model;

import java.time.OffsetDateTime;

import com.silcom.manager.api.dto.input.ProdutoTipoInputDTO;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;

public class ProdutoTipoMock {
    
    public static ProdutoTipo getInstance() {
        ProdutoTipo produtoTipo = new ProdutoTipo();
        produtoTipo.setId(RandomUtils.nextLong(1, 24));
        produtoTipo.setNome("Nome ProdutoTipo " + produtoTipo.getId());
        produtoTipo.setSigla(RandomStringUtils.randomAlphabetic(1));
        produtoTipo.setDataCriacao(OffsetDateTime.now());

        return produtoTipo;
    }

    public static ProdutoTipoInputDTO getInputInstance() {
        ProdutoTipo produtoTipo = getInstance();
        ProdutoTipoInputDTO input = new ProdutoTipoInputDTO();
        input.setNome(produtoTipo.getNome());
        input.setSigla(produtoTipo.getSigla());
        return input;
    }

}
