export interface IError{
    errorCode: number;
}

export class CustomError extends Error implements IError{
    errorCode:number;
    constructor(errorCode:number, errorMessage:string){
        super(errorMessage)
        this.errorCode = errorCode;
    }
}