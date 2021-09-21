package com.silcom.manager.domain.model;

import java.time.OffsetDateTime;

import com.silcom.manager.api.dto.input.ProdutoDetalheInputDTO;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;

public class ProdutoDetalheMock {
    
    public static ProdutoDetalhe getInstance() {
        ProdutoDetalhe produtoDetalhe = new ProdutoDetalhe();
        produtoDetalhe.setId(RandomUtils.nextLong(1, 24));
        produtoDetalhe.setNome("Nome ProdutoDetalhe " + produtoDetalhe.getId());
        produtoDetalhe.setSigla(RandomStringUtils.randomAlphabetic(1));
        produtoDetalhe.setDataCriacao(OffsetDateTime.now());

        return produtoDetalhe;
    }

    public static ProdutoDetalheInputDTO getInputInstance() {
        ProdutoDetalhe produtoDetalhe = getInstance();
        ProdutoDetalheInputDTO input = new ProdutoDetalheInputDTO();
        input.setNome(produtoDetalhe.getNome());
        input.setSigla(produtoDetalhe.getSigla());
        return input;
    }

}
