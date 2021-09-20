package com.silcom.manager.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class RamoAlreadyExistsException extends RuntimeException {

    public RamoAlreadyExistsException(String msg) {
        super(msg);
    }
    
}
