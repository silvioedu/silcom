package com.silcom.manager.api.assembler.output;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import com.silcom.manager.api.dto.ProdutoComplementoOutputDTO;
import com.silcom.manager.domain.model.ProdutoComplemento;
import com.silcom.manager.domain.model.ProdutoComplementoMock;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProdutoComplementoOutputAssemblerTest {
    
    @Autowired
    private ProdutoComplementoOutputAssembler assembler;

    @Test
    void shouldConvertProdutoComplementoOutput_inProdutoComplementoModel() {
        ProdutoComplemento model = ProdutoComplementoMock.getInstance();
        ProdutoComplementoOutputDTO output = assembler.toDTO(model);
        assertValues(model, output);
    }

    @Test
    void shouldConvertListProdutoComplementoOutput_inListProdutoComplementoModel() {
        int max = 10;
        List<ProdutoComplemento> modelList = new ArrayList<>();

        for(int i = 0; i < max; i++) {
            ProdutoComplemento ramo = ProdutoComplementoMock.getInstance();
            modelList.add(ramo);
        }

        List<ProdutoComplementoOutputDTO> outputList = assembler.toColletionDTO(modelList);

        for(int i = 0; i < max; i++) {
            assertValues(modelList.get(i), outputList.get(i));
        }
    }

    private void assertValues(ProdutoComplemento origin, ProdutoComplementoOutputDTO destination) {
        assertEquals(origin.getId(), destination.getId());
        assertEquals(origin.getNome(), destination.getNome());
        assertEquals(origin.getSigla(), destination.getSigla());
        assertEquals(origin.getDataCriacao(), destination.getDataCriacao());
        assertEquals(origin.getDataAtualizacao(), destination.getDataAtualizacao());
    }
}
