package com.silcom.manager.api.dto.input;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProdutoInputDTO {
    
    @NotNull
    private Long tipoId;

    @NotNull
    private Long corId;

    @NotNull
    private Long detalheId;

    @NotNull
    private Long complementoId;

    @NotNull
    private Long fabricanteId;

    @Size(max = 5)
    private String folder;

    @NotNull
    @Positive
    private BigDecimal preco;
}
