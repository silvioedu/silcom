package com.silcom.manager.api.assembler;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import com.silcom.manager.api.dto.RamoOutputDTO;
import com.silcom.manager.domain.model.Ramo;
import com.silcom.manager.domain.model.RamoMock;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RamoOutputAssemblerTest {
    
    @Autowired
    private RamoOutputAssembler assembler;

    @Test
    void shouldConvertRamoOutput_inRamoModel() {
        Ramo model = RamoMock.getInstance();
        RamoOutputDTO output = assembler.toDTO(model);
        assertValues(model, output);
    }

    @Test
    void shouldConvertListRamoOutput_inListRamoModel() {
        int max = 10;
        List<Ramo> modelList = new ArrayList<>();

        for(int i = 0; i < max; i++) {
            Ramo ramo = RamoMock.getInstance();
            modelList.add(ramo);
        }

        List<RamoOutputDTO> outputList = assembler.toColletionDTO(modelList);

        for(int i = 0; i < max; i++) {
            assertValues(modelList.get(i), outputList.get(i));
        }
    }

    private void assertValues(Ramo origin, RamoOutputDTO destination) {
        assertEquals(origin.getId(), destination.getId());
        assertEquals(origin.getNome(), destination.getNome());
        assertEquals(origin.getDataCriacao(), destination.getDataCriacao());
        assertEquals(origin.getDataAtualizacao(), destination.getDataAtualizacao());
    }
}
