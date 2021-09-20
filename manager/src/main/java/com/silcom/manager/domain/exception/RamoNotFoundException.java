package com.silcom.manager.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RamoNotFoundException extends RuntimeException {

    public RamoNotFoundException(String msg) {
        super(msg);
    }
    
}
