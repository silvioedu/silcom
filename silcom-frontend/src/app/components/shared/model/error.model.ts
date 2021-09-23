export interface FieldError {
  name: string;
  userMessage: string;
}

export interface ErrorMesssage {
  status: number;
  timestamp: number;
  type: string;
  detail: string;
  fields?: FieldError[]
}
