package com.silcom.manager.domain.exception;

public class DuplicateKeyException extends RuntimeException {

    public DuplicateKeyException(String msg) {
        super(msg);
    }
    
}
