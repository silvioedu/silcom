package com.silcom.manager.domain.service;

import java.util.List;

import javax.transaction.Transactional;

import com.silcom.manager.domain.exception.RamoAlreadyExistsException;
import com.silcom.manager.domain.exception.RamoNotFoundException;
import com.silcom.manager.domain.model.Ramo;
import com.silcom.manager.domain.repository.RamoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RamoService {
    
    private static final String ALREADY_EXISTS = "Ramo '%s' já existe";
    private static final String NOME_NOT_FOUND = "Não foram encontrados ramos com o nome '%s'";
    private static final String ID_NOT_FOUND = "Ramo id %d não encontrado";

    @Autowired
    private RamoRepository ramoRepository;

    public Page<Ramo> findAll(Pageable pageable) {
        return ramoRepository.findAll(pageable);
    }

    public Ramo findById(final Long id) {
        return ramoRepository.findById(id)
            .orElseThrow(() -> new RamoNotFoundException(
                String.format(ID_NOT_FOUND, id)
            ));
    }
    
    public List<Ramo> findByNomeContaining(final String nome) {
        var ramos = ramoRepository.findByNomeContaining(nome);
        if (ramos.isEmpty()) {
            throw new RamoNotFoundException(
                String.format(NOME_NOT_FOUND, nome)
            ); 
        }
        return ramos;
    }

    @Transactional
    public Ramo insert(final Ramo ramo) {
        var ramoFormatado = this.formatObject(ramo);
        if (ramoRepository.existsByNome(ramo.getNome())) {
            throw new RamoAlreadyExistsException(
                String.format(ALREADY_EXISTS, ramo.getNome()));
        }
        return ramoRepository.save(ramoFormatado);
    }

    @Transactional
    public void delete(final Long id) {
        ramoRepository.delete(this.findById(id));
    }

    @Transactional
    public Ramo update(final Long id, final Ramo ramo) {
        var ramoFormatado = this.formatObject(ramo);
        var ramoRecovered = this.findById(id);
        if (!ramoRecovered.getNome().equals(ramoFormatado.getNome()) &&
            ramoRepository.existsByNome(ramo.getNome())) {
                throw new RamoAlreadyExistsException(
                    String.format(ALREADY_EXISTS, ramo.getNome()));   
        }
        ramoFormatado.setId(id);
        ramoFormatado.setDataCriacao(ramoRecovered.getDataCriacao());
        return ramoRepository.save(ramoFormatado);
    }

    private Ramo formatObject(final Ramo ramo) {
        ramo.setNome(ramo.getNome().toUpperCase());
        return ramo;
    }

}