package com.silcom.manager.api.exception;

import java.time.OffsetDateTime;
import java.util.List;

import com.silcom.manager.domain.exception.DuplicateKeyException;
import com.silcom.manager.domain.exception.ResourceInUseException;
import com.silcom.manager.domain.exception.ResourceNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler({ ResourceNotFoundException.class })
	public ResponseEntity<Object> handleApiNotFoundException(RuntimeException ex) {

        Problem problem = createProblemBuilder(
            ProblemTypeEnum.RESOURCE_NOT_FOUND.getStatus(), 
            ProblemTypeEnum.RESOURCE_NOT_FOUND,
            ex.getMessage(),
            null)
            .build();

		return ResponseEntity
            .status(problem.getStatus())
            .body(problem);
	}          
   
    @ExceptionHandler({ DuplicateKeyException.class })
	public ResponseEntity<Object> handleApiDuplicateKeyException(RuntimeException ex) {

        Problem problem = createProblemBuilder(
            ProblemTypeEnum.DUPLICATE_KEY.getStatus(), 
            ProblemTypeEnum.DUPLICATE_KEY,
            ex.getMessage(),
            null)
            .build();

		return ResponseEntity
            .status(problem.getStatus())
            .body(problem);
	}          

    @ExceptionHandler({ ResourceInUseException.class })
	public ResponseEntity<Object> handleApiInUseException(RuntimeException ex) {

        Problem problem = createProblemBuilder(
            ProblemTypeEnum.RESOURCE_IN_USE.getStatus(), 
            ProblemTypeEnum.RESOURCE_IN_USE,
            ex.getMessage(),
            null)
            .build();

		return ResponseEntity
            .status(problem.getStatus())
            .body(problem);
	}          

    private Problem.ProblemBuilder createProblemBuilder(HttpStatus status, ProblemTypeEnum problemType, String detail, List<Field> fields) {
		return Problem.builder()
            .status(status.value())
            .type(problemType.getUri())
            .title(problemType.getTitle())
			.detail(detail)
            .fields(fields)
            .timestamp(OffsetDateTime.now());
	}
}
