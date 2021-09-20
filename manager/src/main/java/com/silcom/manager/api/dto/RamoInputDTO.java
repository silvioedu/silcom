package com.silcom.manager.api.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RamoInputDTO {
    
    @NotBlank
    @Size(max=60)
    private String nome;

}
