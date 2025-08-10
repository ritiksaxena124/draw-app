import { CreateUserSchema, LoginUserSchema } from "@repo/common/types";
import { Request, Response } from "express";
import { HttpStatusCode } from "../../../constants/http-status.constant";
import { ApiResponse } from "../../../lib/utils/api-response.util";
import { asyncHandler } from "../../../lib/utils/async-handler.util";
import { authService } from "./auth.service";

class AuthController {
    login = asyncHandler(async (req: Request, res: Response) => {
        const payload = LoginUserSchema.safeParse(req.body);
        console.log("Login user payload: ", payload);
        const data = await authService.login();
        res.status(HttpStatusCode.OK).json(new ApiResponse(HttpStatusCode.OK, data, "Login successful!"));
    })

    registerUser = asyncHandler(async (req: Request, res: Response) => {
        const payload = CreateUserSchema.safeParse(req.body);
        console.log("Register user payload: ", payload);

        res.json(new ApiResponse(HttpStatusCode.CREATED, "User registered successfully!"))
    })
}

export const authController = new AuthController();