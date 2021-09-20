package com.silcom.manager.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RamoDuplicatedException extends RuntimeException {

    public RamoDuplicatedException(String msg) {
        super(msg);
    }
    
}
