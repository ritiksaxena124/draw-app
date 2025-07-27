import { Request, Response } from "express";
import { HttpStatusCode, HttpStatusMsg } from "../constants/http-status.constant";

export const handle404Error = (req: Request, res: Response) => {
    res.status(HttpStatusCode.NOT_FOUND).json({
        status: 'error',
        message: HttpStatusMsg.NOT_FOUND,
        data: null,
    });
}