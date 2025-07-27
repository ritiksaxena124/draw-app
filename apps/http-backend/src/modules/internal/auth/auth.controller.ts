import { Request, Response } from "express";
import { asyncHandler } from "../../../lib/utils/async-handler.util";
import { ApiResponse } from "../../../lib/utils/api-response.util";
import { HttpStatusCode } from "../../../constants/http-status.constant";
import { authService } from "./auth.service";

class Auth {
    login = asyncHandler(async (req: Request, res: Response) => {
        const data = await authService.login();
        res.status(HttpStatusCode.OK).json(new ApiResponse(HttpStatusCode.OK, data, "Login successful!"));
    })
}

export const authController = new Auth();