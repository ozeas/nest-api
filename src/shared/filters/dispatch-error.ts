import { Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { ValidationError } from "sequelize";
import { MessageCodeError } from "../errors/message-code-error";

@Catch(MessageCodeError, ValidationError, HttpException, Error)
export class DispatchError implements ExceptionFilter {
    public catch(err, res) {
        if (err instanceof MessageCodeError) {
            res.setHeader("x-message-code-error", err.messageCode);
            res.setHeader("x-message", err.message);
            res.setHeader("x-httpStatus-error", err.httpStatus);

            return res.status(err.httpStatus).send();
        } else if (err instanceof ValidationError) {
            /* Sequelize validation error. */
            res.setHeader("x-message-code-error", (err as ValidationError).errors[0].type);
            res.setHeader("x-message", (err as ValidationError).errors[0].message);
            res.setHeader("x-httpStatus-error", HttpStatus.BAD_REQUEST);

            return res.status(HttpStatus.BAD_REQUEST).send();
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}
