import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("login")
    public async login(@Body() body, @Res() res) {
        const token = await this.authService.sign();
        res.status(HttpStatus.ACCEPTED).json("Bearer " + token);
    }
}
