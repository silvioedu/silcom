package com.silcom.manager.api.assembler;

import java.util.List;
import java.util.stream.Collectors;

import com.silcom.manager.api.dto.RamoOutputDTO;
import com.silcom.manager.domain.model.Ramo;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RamoOutputAssembler {
    
    @Autowired
    private ModelMapper modelMapper;

    public RamoOutputDTO toDTO(Ramo ramo) {
        return modelMapper.map(ramo, RamoOutputDTO.class);
    }

    public List<RamoOutputDTO> toColletionDTO(List<Ramo> ramos) {
        return ramos.stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }

}
